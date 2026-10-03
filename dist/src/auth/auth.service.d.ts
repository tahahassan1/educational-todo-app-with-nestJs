import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "../prisma/prisma.service";
import { UsersService } from "../users/users.service";
import { CreateUserResponseDto } from './dto/create-user-response.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    private usersService;
    SALT_ROUNDS: number;
    constructor(prisma: PrismaService, jwtService: JwtService, usersService: UsersService);
    login(loginDto: LoginDto): Promise<LoginResponseDto | undefined>;
    register(createUserDto: CreateUserDto): Promise<CreateUserResponseDto | undefined>;
}
