import { FC } from 'react'
import { IVideoItem } from './video-item.interface'
import { useRouter } from 'next/router'
import cn from 'classnames'

import styles from './VideItem.module.scss'
import { BiEdit, BiTrash } from 'react-icons/bi'
import Image from 'next/image'
import VideoDuration from './VideoDuration'
import Link from 'next/link'
import VideoStatistics from './VideoStatistics'
import UserAvatar from '../user-avatar/UserAvatar'

const VideoItem: FC<IVideoItem> = ({
	isSmall,
	isUpdateLink,
	removeHandler,
	item
}) => {
	const { push } = useRouter()

	return (
		<div
			className={cn(styles.video_item, {
				[styles.small]: isSmall
			})}
		>
			{!!removeHandler && (
				<button
					className={styles.buttonRemove}
					onClick={() => removeHandler(item.id)}
				>
					<BiTrash className={styles.icon} />
				</button>
			)}
			{isUpdateLink && (
				<button
					className={styles.buttonEdit}
					onClick={() => push(`/video/edit/${item.id}`)}
				>
					<BiEdit className={styles.icon} />
				</button>
			)}

			<div className={styles.thumbnail}>
				{item.thumbnailPath && (
					<Image
						src={`http://localhost:4200${item.thumbnailPath}`}
						alt={item.name}
						width={185}
						height={103}
						layout='responsive'
					/>
				)}
				<VideoDuration duration={item?.duration} />
				{item?.user?.avatarPath && (
					<div className={styles['avatar_wr']}>
						<UserAvatar user={item.user} />
					</div>
				)}
			</div>

			<div className={styles.information}>
				{!isSmall && <div className={styles.author}>{item.user?.name}</div>}
				<Link href={`/v/${item.id}`} legacyBehavior>
					<a className={styles.name}>{item.name}</a>
				</Link>
				<VideoStatistics
					views={item?.views}
					createdAt={!isSmall ? item.createdAt : undefined}
				/>
			</div>
		</div>
	)
}

export default VideoItem
