import { Controller, Post, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto:AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('login')
  login(@Body() dto:AuthDto){
    return  this.authService.login(dto);
  }
  @Get('signout')
  signout(){
    return this.authService.signout();
  }
  @Get('profile')
  getprofile(){
    return this.authService.getProfile();
  }
  
}
