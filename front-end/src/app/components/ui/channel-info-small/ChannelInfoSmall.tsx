import { FC } from 'react'
import { IUser } from '../../../types/user.interface'

import styles from './ChannelInfoSmall.module.scss'
import UserAvatar from '../user-avatar/UserAvatar'
import { formatNumberToK } from '../../../utils/format-number-to-k'

const ChannelInfoSmall: FC<{ channel: IUser; message?: string }> = ({
	channel,
	message
}) => {
	return (
		<div className={styles.profile_info}>
			{channel.avatarPath && <UserAvatar user={channel} />}
			<div>
				<div className={styles.name}>{channel.name}</div>
				<div className={styles.subscribers_count}>
					{message ||
						formatNumberToK(channel.subscribersCount) + ' subscribers'}
				</div>
			</div>
		</div>
	)
}
export default ChannelInfoSmall
