import { Base } from '../utils/base';
import { UserEntity } from '../user/user.entity';
import { CommentEntity } from '../comment/comment.entity';
export declare class VideoEntity extends Base {
    name: string;
    isPublic: boolean;
    views?: number;
    likes?: number;
    duration?: number;
    description: string;
    videoPath: string;
    thumbnailPath: string;
    user: UserEntity;
    comments: CommentEntity[];
}
