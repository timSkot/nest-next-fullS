import { Base } from '../utils/base';
import { UserEntity } from '../user/user.entity';
import { VideoEntity } from '../video/video.entity';
export declare class CommentEntity extends Base {
    message: string;
    user: UserEntity;
    video: VideoEntity;
}
