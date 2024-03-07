import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { videoApi } from '../../../store/api/video.api'
import Layout from '../../layout/Layout'
import VideoPlayer from './video-player/VideoPlayer'
import { IVideo } from '../../../types/video.interface'
import cn from 'classnames'

import styles from './Video.module.scss'
import Comments from './comments/Comment'
import VideoDetail from './video-detail/VideoDetail'
import { IUser } from '../../../types/user.interface'

const Video: FC = () => {
	const { query } = useRouter()
	const { data: video = {} as IVideo } = videoApi.useGetVideoByIdQuery(
		Number(query.id),
		{
			skip: !query?.id
		}
	)

	const [updateViews] = videoApi.useUpdateViewsMutation()

	useEffect(() => {
		if (query.id) updateViews(Number(query.id))
	}, [query.id])
	return (
		<Layout title={video.name}>
			<div className={styles.layout}>
				<VideoPlayer videoPath={video.videoPath} />
				<Comments comments={video.comments || []} videoId={video.id} />
			</div>
			<div className={cn(styles.layout, styles.layoutL)}>
				<VideoDetail video={video} channel={video.user || ({} as IUser)} />
				<div></div>
			</div>
		</Layout>
	)
}

export default Video
