"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TodosService = class TodosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(userId) {
        return this.prisma.todo.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async create(userId, createTodoDto) {
        return this.prisma.todo.create({
            data: {
                title: createTodoDto.title,
                userId: userId,
            },
        });
    }
    async updateTodo(userId, id, updateTodoDto) {
        return this.prisma.todo.update({
            where: {
                userId: userId,
                id: id,
            },
            data: updateTodoDto,
        });
    }
    async deleteTodo(userId, id) {
        return this.prisma.todo.delete({
            where: {
                userId: userId,
                id: id,
            },
        });
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TodosService);
//# sourceMappingURL=todos.service.js.map