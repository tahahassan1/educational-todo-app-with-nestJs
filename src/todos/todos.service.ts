// src/todos/todos.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { ChangeTodoStatusDto } from './dto/change-todo-status.dto';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId: number) {
    return this.prisma.todo.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(userId: number, createTodoDto: CreateTodoDto) {
    return this.prisma.todo.create({
      data: {
        title: createTodoDto.title,
        userId: userId,
      },
    });
  }

  async updateTodo(userId: number, id: number, updateTodoDto: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: {
        userId: userId,
        id: id,
      },
      data: updateTodoDto,
    });
  }

  async deleteTodo(userId: number, id: number) {
    return this.prisma.todo.delete({
      where: {
        userId: userId,
        id: id,
      },
    });
  }

  // async changeStatus(
  //   userId: number,
  //   id: number,
  //   changeTodoStatusDto: ChangeTodoStatusDto,
  // ) {
  //   return this.prisma.todo.update({
  //     where: {
  //       userId: userId,
  //       id: id,
  //     },
  //     data: {
  //       isDone: changeTodoStatusDto.isDone,
  //     },
  //   });
  // }

  // async changeTitle(
  //   userId: number,
  //   id: number,
  //   changeTodoTitleDto: ChangeTodoTitleDto,
  // ) {
  //   return this.prisma.todo.update({
  //     where: {
  //       userId: userId,
  //       id: id,
  //     },
  //     data: {
  //       title: changeTodoTitleDto.title,
  //     },
  //   });
  // }
}

// For user:
// Get todo list
// Create a new item
// Update an item
// Mark an item as done or incomplete
// Delete an item
