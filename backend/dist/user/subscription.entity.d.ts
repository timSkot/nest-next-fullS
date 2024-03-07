import { UserEntity } from './user.entity';
import { Base } from '../utils/base';
export declare class SubscriptionEntity extends Base {
    fromUser: UserEntity;
    toChannel: UserEntity;
}
