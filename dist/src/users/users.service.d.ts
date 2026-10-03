import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from '../auth/dto/create-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findUser(email: string): Promise<{
        id: number;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        email: string;
        username: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
