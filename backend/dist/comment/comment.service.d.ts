import { CommentEntity } from './comment.entity';
import { Repository } from 'typeorm';
import { CommentDto } from './comment.dto';
export declare class CommentService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<CommentEntity>);
    create(userId: number, dto: CommentDto): Promise<CommentEntity>;
}
