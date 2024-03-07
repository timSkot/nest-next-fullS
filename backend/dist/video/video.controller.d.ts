import { VideoService } from './video.service';
import { VideoDto } from './video.dto';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    getVideoPrivate(id: string): Promise<import("./video.entity").VideoEntity>;
    getAll(searchTerm?: string): Promise<import("./video.entity").VideoEntity[]>;
    getMostPopularByViews(): Promise<import("./video.entity").VideoEntity[]>;
    getVideo(id: string): Promise<import("./video.entity").VideoEntity>;
    createVideo(id: number): Promise<number>;
    updateVideo(id: string, dto: VideoDto): Promise<{
        name: string;
        isPublic: boolean;
        description: string;
        videoPath: string;
        thumbnailPath: string;
        views?: number;
        likes?: number;
        duration?: number;
        user: import("../user/user.entity").UserEntity;
        comments: import("../comment/comment.entity").CommentEntity[];
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } & import("./video.entity").VideoEntity>;
    deleteVideo(id: string): Promise<import("typeorm").DeleteResult>;
    updateViews(videoId: string): Promise<import("./video.entity").VideoEntity>;
    updateLikes(videoId: string): Promise<import("./video.entity").VideoEntity>;
}
