import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'الإيميل غير صالح' })
  @IsNotEmpty({ message: 'البريد الإلكتروني مطلوب' })
  email: string;

  @IsString({ message: 'كلمة السر يجب أن تكون نصًا' })
  @MinLength(6, { message: 'كلمة المرور يجب ألا تقل عن 6 أحرف' })
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
