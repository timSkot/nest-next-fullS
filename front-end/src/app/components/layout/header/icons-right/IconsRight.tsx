import { FC } from 'react'
import { useAuth } from '../../../../hooks/useAuth'

import styles from './IconsRight.module.scss'
import ProfileMenu from '../profile-menu/ProfileMenu'
import AuthForm from '../auth-form/AuthForm'

const IconsRight: FC = () => {
	const { user } = useAuth()
	return (
		<div className={styles.icons}>
			{user ? (
				<>
					<ProfileMenu />
				</>
			) : (
				<AuthForm />
			)}
		</div>
	)
}

export default IconsRight
