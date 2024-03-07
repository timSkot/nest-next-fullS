import { FC } from 'react'
import { IComment } from '../../../../types/comment.interface'
import { useAuth } from '../../../../hooks/useAuth'
import styles from './Comment.module.scss'
import CommentItem from './CommentItem'
import AddCommentForm from './AddComment'

const Comments: FC<{ comments: IComment[]; videoId: number }> = ({
	comments,
	videoId
}) => {
	const { user } = useAuth()
	return (
		<div className={styles.comments}>
			<h2>Comments</h2>
			<div className={styles.line}>
				{comments.length ? (
					<div className={styles.grid}>
						{comments.map(comment => (
							<CommentItem comment={comment} key={comment.id} />
						))}
					</div>
				) : (
					<p>Comments not found!</p>
				)}
				<div className={styles.bottomForm}>
					{user && <AddCommentForm videoId={videoId} />}
				</div>
			</div>
		</div>
	)
}

export default Comments
