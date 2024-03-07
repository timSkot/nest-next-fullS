import { IVideo } from '../../../types/video.interface'
import { FC } from 'react'
import Layout from '../../layout/Layout'
import Catalog from '../home/catalog/Catalog'

const Trending: FC<{ topVideos: IVideo[] }> = ({ topVideos }) => {
	return (
		<Layout title='Trending'>
			<Catalog newVideos={topVideos} />
		</Layout>
	)
}

export default Trending
