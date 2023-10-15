import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthDto {
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Length(8, 20, { message: 'password must be between 8 and 20 characters'})
  password: string;
}