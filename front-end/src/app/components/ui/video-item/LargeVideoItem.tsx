import { FC } from 'react'
import { IVideo } from '../../../types/video.interface'
import cn from 'classnames'
import styles from './VideItem.module.scss'
import Image from 'next/image'
import VideoDuration from './VideoDuration'
import Link from 'next/link'
import UserAvatar from '../user-avatar/UserAvatar'
import VideoStatistics from './VideoStatistics'

const LargeVideoItem: FC<{ video: IVideo }> = ({ video }) => {
	return (
		<div className={cn(styles.video_item, styles.large_item)}>
			<div className={styles.thumbnail}>
				{video.thumbnailPath && (
					<Image
						src={`http://localhost:4200${video.thumbnailPath}`}
						alt={video.name}
						layout='fill'
						className={styles['bg-image']}
						priority
					/>
				)}
				<VideoDuration duration={video.duration} isBottom />
				<div className={styles.information}>
					<Link href={`/v/${video.id}`}>
						<span className={styles.name}>{video.name}</span>
					</Link>

					{video?.user?.avatarPath && <UserAvatar user={video.user} isWhite />}

					<div className={styles.author}>{video.user?.name}</div>

					<VideoStatistics views={video.views} createdAt={video.createdAt} />
				</div>
			</div>
		</div>
	)
}

export default LargeVideoItem
