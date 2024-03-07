import { api } from './api'
import { IComment, ICommentDto } from '../../types/comment.interface'

export const commentApi = api.injectEndpoints({
	endpoints: builder => ({
		createComment: builder.mutation<IComment, ICommentDto>({
			query: body => ({
				url: 'comment',
				method: 'POST',
				body
			}),
			invalidatesTags: (result, error, { videoId }) => [
				{ type: 'Video', id: videoId }
			]
		})
	})
})
