import {
	Body,
	Controller,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { CommentService } from './comment.service'
import { CurrentUser } from '../user/user.decorator'
import { CommentDto } from './comment.dto'
import { Auth } from '../auth/decorators/auth.decorator'

@Controller('comment')
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async createComment(@CurrentUser('id') id: string, @Body() dto: CommentDto) {
		return this.commentService.create(+id, dto)
	}
}
