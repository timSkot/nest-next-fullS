import { FC } from 'react'
import { IComment } from '../../../../types/comment.interface'
import styles from './Comment.module.scss'
import ChannelInfoSmall from '../../../ui/channel-info-small/ChannelInfoSmall'

const CommentItem: FC<{ comment: IComment }> = ({ comment }) => {
	return (
		<div className={styles.commentItem}>
			<ChannelInfoSmall channel={comment.user} message={comment.message} />
		</div>
	)
}

export default CommentItem
