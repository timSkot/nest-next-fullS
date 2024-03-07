import Home from '../app/components/pages/home/Home'
import { IHome } from '../app/components/pages/home/home.interface'
import { GetStaticProps, NextPage } from 'next'
import { IVideo } from '../app/types/video.interface'
import { VideoService } from '../app/services/video.service'

// @ts-ignore
import shuffle from 'lodash/shuffle'

const HomePage: NextPage<IHome> = props => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: newVideos } = await VideoService.getAll()
		const { data: topVideos } = await VideoService.getMostPopular()

		return {
			props: {
				newVideos,
				topVideo: topVideos[0],
				randomVideo:
					shuffle(newVideos.filter(v => v.id !== topVideos[0].id))[0] ||
					({} as IVideo)
			} as IHome
		}
	} catch (e) {
		return {
			props: {
				newVideos: [],
				topVideo: {} as IVideo,
				randomVideo: {} as IVideo
			} as IHome
		}
	}
}

export default HomePage
