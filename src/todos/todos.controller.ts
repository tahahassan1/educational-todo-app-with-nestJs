import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
// import { ChangeTodoStatusDto } from './dto/change-todo-status.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import { UpdateTodoDto } from './dto/update-todo.dto';

@UseGuards(AuthGuard)
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async findAll(@GetUser('id') userId: number) {
    const response = await this.todosService.findAll(userId);

    return {
      todos: response,
    };
  }

  @Post()
  async create(
    @GetUser('id') userId: number,
    @Body() createTodoDto: CreateTodoDto,
  ) {
    await this.todosService.create(userId, createTodoDto);
  }

  @Put(':id')
  async updateTodo(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    await this.todosService.updateTodo(userId, id, updateTodoDto);
  }

  @Delete(':id')
  async deleteTodo(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    await this.todosService.deleteTodo(userId, id);
  }

  // @Put(':id')
  // async changeStatus(
  //   @GetUser('id') userId: number,
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() changeTodoStatusDto: ChangeTodoStatusDto,
  // ) {
  //   await this.todosService.changeStatus(userId, id, changeTodoStatusDto);
  // }

  // @Put(':id')
  // async changeTitle(
  //   @GetUser('id') userId: number,
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() changeTodoTitleDto: ChangeTodoTitleDto,
  // ) {
  //   await this.todosService.changeTitle(userId, id, changeTodoTitleDto);
  // }
}
