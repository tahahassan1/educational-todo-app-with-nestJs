import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findUser(email: string) {
    return this.prisma.user.findUnique({ where: { email: email } });
  }
  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        username: createUserDto.username,
        email: createUserDto.email,
        password: createUserDto.password,
      },
    });
  }
}
