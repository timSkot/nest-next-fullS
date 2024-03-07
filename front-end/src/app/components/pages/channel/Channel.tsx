import { FC } from 'react'
import { IChannel } from './channel.interface'
import Layout from '../../layout/Layout'

import styles from './Channel.module.scss'
import Catalog from '../home/catalog/Catalog'
import ChannelInfoSmall from '../../ui/channel-info-small/ChannelInfoSmall'
import SubscribeButton from '../../ui/subscribe-button/SubscribeButton'

const Channel: FC<IChannel> = ({ channel }) => {
	return (
		<Layout title={channel.name}>
			<div className={styles['channel-wr']}>
				<div className={styles.item}>
					<ChannelInfoSmall channel={channel} />
					<SubscribeButton channelIdForSubscribe={channel.id} />
				</div>
				<article className={styles.article}>{channel.description}</article>
			</div>
			<Catalog newVideos={channel.videos || []} />
		</Layout>
	)
}

export default Channel
