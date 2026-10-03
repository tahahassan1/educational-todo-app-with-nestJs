import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(userId: number): Promise<{
        id: number;
        title: string;
        isDone: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }[]>;
    create(userId: number, createTodoDto: CreateTodoDto): Promise<{
        id: number;
        title: string;
        isDone: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }>;
    updateTodo(userId: number, id: number, updateTodoDto: UpdateTodoDto): Promise<{
        id: number;
        title: string;
        isDone: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }>;
    deleteTodo(userId: number, id: number): Promise<{
        id: number;
        title: string;
        isDone: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }>;
}
