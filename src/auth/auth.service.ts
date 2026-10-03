import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { CreateUserResponseDto } from './dto/create-user-response.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  SALT_ROUNDS = 10;
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto | undefined> {
    const user = await this.usersService.findUser(loginDto.email);

    const result = await bcrypt.compare(
      loginDto.password,
      user?.password ? user.password : ' ',
    );

    // I did that to unable hackers to know the real reason
    if (!user || !result) {
      throw new UnauthorizedException(
        'المستخدم غير موجود أو كلمة السر غير صحيحة.',
      );
    }

    if (result) {
      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
      };

      const accessToken = await this.jwtService.signAsync(payload);
      return {
        accessToken: accessToken,
        email: user.email,
        username: user.username,
      };
    }
  }

  async register(
    createUserDto: CreateUserDto,
  ): Promise<CreateUserResponseDto | undefined> {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      this.SALT_ROUNDS,
    );

    createUserDto.password = hashedPassword;

    const user = await this.usersService.create(createUserDto);

    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      accessToken: token,
      username: createUserDto.username,
      email: createUserDto.email,
    };
  }
}
