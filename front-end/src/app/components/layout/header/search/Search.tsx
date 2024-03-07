import { FC } from 'react'
import { useSearch } from './useSearch'

import styles from './Search.module.scss'
import VideoItem from '../../../ui/video-item/VideoItem'

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch()

	return (
		<div className={styles.search_top}>
			<label>
				<input
					type='text'
					placeholder='Search video...'
					value={searchTerm}
					onChange={handleSearch}
				/>
				<img src='/img/common/search.svg' alt='Search' />
			</label>
			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						data.map(video => <VideoItem isSmall item={video} key={video.id} />)
					) : (
						<div className='text-white'>Video not found!</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Search
