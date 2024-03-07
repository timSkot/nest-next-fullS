import { UserService } from './user.service';
import { UserDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: number): Promise<import("./user.entity").UserEntity>;
    getUser(id: string): Promise<import("./user.entity").UserEntity>;
    updateUser(id: string, dto: UserDto): Promise<import("./user.entity").UserEntity>;
    subscribeToChannel(id: number, channelId: string): Promise<boolean>;
    getUsers(): Promise<import("./user.entity").UserEntity[]>;
}
