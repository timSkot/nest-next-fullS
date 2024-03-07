import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { SubscriptionEntity } from './subscription.entity';
import { UserDto } from './user.dto';
export declare class UserService {
    private readonly userRepository;
    private readonly subscriptionRepository;
    constructor(userRepository: Repository<UserEntity>, subscriptionRepository: Repository<SubscriptionEntity>);
    byId(id: number): Promise<UserEntity>;
    updateProfile(id: number, dto: UserDto): Promise<UserEntity>;
    subscribe(id: number, channelId: number): Promise<boolean>;
    getAll(): Promise<UserEntity[]>;
}
