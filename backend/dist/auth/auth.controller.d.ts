import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto): Promise<{
        user: {
            id: number;
            email: string;
        };
        accessToken: string;
    }>;
    register(dto: AuthDto): Promise<{
        user: {
            id: number;
            email: string;
        };
        accessToken: string;
    }>;
}
