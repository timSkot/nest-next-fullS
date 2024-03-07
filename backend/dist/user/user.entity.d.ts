import { VideoEntity } from '../video/video.entity';
import { Base } from '../utils/base';
import { SubscriptionEntity } from './subscription.entity';
export declare class UserEntity extends Base {
    email: string;
    password: string;
    name: string;
    isVerified: boolean;
    subscribersCount?: number;
    description: string;
    avatarPath: string;
    videos: VideoEntity[];
    subscriptions: SubscriptionEntity[];
    subscribers: SubscriptionEntity[];
}
