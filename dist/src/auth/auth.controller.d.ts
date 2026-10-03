import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<import("./dto/login-response.dto").LoginResponseDto | undefined>;
    create(CreateUserDto: CreateUserDto): Promise<import("./dto/create-user-response.dto").CreateUserResponseDto | undefined>;
}
