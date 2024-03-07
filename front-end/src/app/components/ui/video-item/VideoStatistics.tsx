import { FC } from 'react'

import styles from './VideItem.module.scss'
import { formatNumberToK } from '../../../utils/format-number-to-k'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

dayjs.extend(relativeTime)
interface IVideoStatistics {
	views?: number
	createdAt?: string
}

const VideoStatistics: FC<IVideoStatistics> = ({ views = 0, createdAt }) => {
	return (
		<div className={styles.number_info}>
			<div className={styles.views}>{formatNumberToK(views)} views</div>
			{!!createdAt && (
				<>
					<div className={styles.dot}>.</div>
					<div className={styles.date}>
						{dayjs(new Date(createdAt)).fromNow()}
					</div>
				</>
			)}
		</div>
	)
}

export default VideoStatistics
