import { FC } from 'react'
import { api } from '../../store/api/api'
import { videoApi } from '../../store/api/video.api'
import Layout from '../layout/Layout'
import Catalog from './home/catalog/Catalog'
import Loader from '../ui/loader/Loader'

const Studio: FC = () => {
	const { data, isLoading } = api.useGetProfileQuery(null)
	const [removeVideo] = videoApi.useDeleteVideoMutation()

	const videos = data?.videos
	return (
		<Layout title='ViTube'>
			<div>
				{isLoading ? (
					<Loader count={5} />
				) : videos?.length ? (
					<Catalog
						newVideos={videos}
						removeHandler={removeVideo}
						isUpdateLink
					/>
				) : (
					<p>Video not found!</p>
				)}
			</div>
		</Layout>
	)
}

export default Studio
