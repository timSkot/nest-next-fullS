import { GetStaticProps, NextPage } from 'next'
import { IVideo } from '../app/types/video.interface'
import Trending from '../app/components/pages/trending/Trending'
import { VideoService } from '../app/services/video.service'

const TrendingPage: NextPage<{ topVideos: IVideo[] }> = ({ topVideos }) => {
	return <Trending topVideos={topVideos} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: topVideos } = await VideoService.getMostPopular()

		return {
			props: {
				topVideos
			},
			revalidate: 60
		}
	} catch (e) {
		return {
			props: {
				topVideos: []
			}
		}
	}
}

export default TrendingPage
