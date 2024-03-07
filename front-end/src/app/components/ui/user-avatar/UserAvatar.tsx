import { FC } from 'react'
import { IUser } from '../../../types/user.interface'
import Link from 'next/link'
import cn from 'classnames'
import styles from './UserAvatar.module.scss'
import Image from 'next/image'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const UserAvatar: FC<{ user: IUser; isWhite?: boolean }> = ({
	user,
	isWhite
}) => {
	return (
		<Link href={`/c/${user.id}`} legacyBehavior>
			<a>
				<span className={cn(styles.avatar, { [styles.white]: isWhite })}>
					<Image
						src={`http://localhost:4200${user.avatarPath}` || ''}
						alt={user.name}
						width={45}
						height={45}
					/>
					{user.isVerified && (
						<span className={styles.isVerified}>
							<IoIosCheckmarkCircle />
						</span>
					)}
				</span>
			</a>
		</Link>
	)
}

export default UserAvatar
