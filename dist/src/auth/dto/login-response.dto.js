"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponseDto = void 0;
class LoginResponseDto {
    accessToken;
    username;
    email;
    constructor(username, email, accessToken) {
        this.username = username;
        this.email = email;
        this.accessToken = accessToken;
    }
}
exports.LoginResponseDto = LoginResponseDto;
//# sourceMappingURL=login-response.dto.js.map