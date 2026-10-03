import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findAll(userId: number): Promise<{
        todos: {
            id: number;
            title: string;
            isDone: boolean;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
        }[];
    }>;
    create(userId: number, createTodoDto: CreateTodoDto): Promise<void>;
    updateTodo(userId: number, id: number, updateTodoDto: UpdateTodoDto): Promise<void>;
    deleteTodo(userId: number, id: number): Promise<void>;
}
