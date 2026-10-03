import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  async login(@Body() loginDto: LoginDto) {
    const response = await this.authService.login(loginDto);
    return response;
  }

  @Post('register')
  @Public()
  async create(@Body() CreateUserDto: CreateUserDto) {
    const response = await this.authService.register(CreateUserDto);

    return response;
  }
}
