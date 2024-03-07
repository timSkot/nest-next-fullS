import { FC } from 'react'

import styles from './VideItem.module.scss'

const VideoDuration: FC<{
	duration: number | undefined
	isBottom?: boolean
}> = ({ duration, isBottom }) => {
	return (
		<time className={isBottom ? styles.isBottom : ''}>{duration} min.</time>
	)
}

export default VideoDuration
