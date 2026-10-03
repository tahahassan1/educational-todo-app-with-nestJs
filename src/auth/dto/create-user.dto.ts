import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'اسم المستخدم يجب أن يكون نصًا' })
  @IsNotEmpty({ message: 'يجب إدخال اسم المستخدم' })
  @MinLength(4, { message: 'اسم المستخدم يجب أن يكون على الأقل أربع أحرف' })
  username: string;

  @IsEmail({}, { message: 'الإيميل غير صالح' })
  @IsNotEmpty({ message: 'البريد الإلكتروني مطلوب' })
  email: string;

  @IsString({ message: 'كلمة السر يجب أن تكون نصًا' })
  @MinLength(6, { message: 'كلمة المرور يجب ألا تقل عن 6 أحرف' })
  password: string;

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
