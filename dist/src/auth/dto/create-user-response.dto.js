"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserResponseDto = void 0;
class CreateUserResponseDto {
    accessToken;
    username;
    email;
    constructor(username, email, accessToken) {
        this.username = username;
        this.email = email;
        this.accessToken = accessToken;
    }
}
exports.CreateUserResponseDto = CreateUserResponseDto;
//# sourceMappingURL=create-user-response.dto.js.map