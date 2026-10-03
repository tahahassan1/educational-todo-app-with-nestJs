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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
class CreateUserDto {
    username;
    email;
    password;
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'اسم المستخدم يجب أن يكون نصًا' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'يجب إدخال اسم المستخدم' }),
    (0, class_validator_1.MinLength)(4, { message: 'اسم المستخدم يجب أن يكون على الأقل أربع أحرف' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'الإيميل غير صالح' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'البريد الإلكتروني مطلوب' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'كلمة السر يجب أن تكون نصًا' }),
    (0, class_validator_1.MinLength)(6, { message: 'كلمة المرور يجب ألا تقل عن 6 أحرف' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
//# sourceMappingURL=create-user.dto.js.map