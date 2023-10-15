import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { PrismaService } from 'prisma/Prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
jwt: any;
constructor(private prisma: PrismaService) {}

async signup(dto:AuthDto){
    const {email,password} = dto;

    const foundUser = await this.prisma.user.findUnique({
        where: { email },
    });
    if (foundUser) {
        throw new BadRequestException('Email already exists');
    }
    
    const  hashedpassword = await this.hashPassword(password);

    await this.prisma.user.create({
        data: {
        email,
        hashedpassword
        },
    });
    return {message:'signup succefully'};
}
async login(dto:AuthDto){
    const {email,password} = dto;

    const foundUser = await this.prisma.user.findUnique({
        where: { email },
    });
    if (!foundUser) {
        throw new BadRequestException('wrong credentials');
    }
    const isPasswordMatch = await this.comparePassword({
        password,
        hash: foundUser.hashedpassword,
    });
    if (!isPasswordMatch) {
        throw new BadRequestException('wrong credentials');
    }

    //signing in Jason web token (jwt) & return it to the user
    
    return '';
}
async signout(){
    return '';

}
async getProfile(){
    return '';
}

async hashPassword(password:string){
return await bcrypt.hash(password, 10);

}
async comparePassword(args:{password:string,hash:string}){
return await bcrypt.compare(args.password, args.hash);
}
async signToken(args:{id:string, email:string}){
const payload = args;
this.jwt.signAsync(payload,{secret:JwtSecret});

}
}