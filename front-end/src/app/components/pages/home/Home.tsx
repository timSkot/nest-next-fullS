import { FC } from 'react'
import Layout from '../../layout/Layout'
import Discover from './discover/Discover'
import Catalog from './catalog/Catalog'
import { IHome } from './home.interface'

const Home: FC<IHome> = ({ topVideo, randomVideo, newVideos }) => {
	return (
		<Layout title='VideoTube | Video Hosting'>
			<Discover randomVideo={randomVideo} topVideo={topVideo} />
			<Catalog newVideos={newVideos} />
		</Layout>
	)
}

export default Home
