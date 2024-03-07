import { FC } from 'react'

import styles from './Sidebar.module.scss'
import Link from 'next/link'
import Menu from './menu/Menu'
import { menu } from './menu/menu.data'
import { useAuth } from '../../../hooks/useAuth'
import { api } from '../../../store/api/api'

const Sidebar: FC = () => {
	const { user } = useAuth()
	const { data, isLoading } = api.useGetProfileQuery(null, {
		skip: !user
	})
	return (
		<aside className={styles.sidebar}>
			<Link legacyBehavior href='/'>
				<a className={styles.logo}>ViTube</a>
			</Link>

			<Menu title='Menu' items={menu} />

			{user && (
				<Menu
					title='My subscriptions'
					items={
						data?.subscriptions.map(({ toChannel }) => ({
							image: toChannel.avatarPath,
							title: toChannel.name,
							link: '/c/' + toChannel.id
						})) || []
					}
				/>
			)}

			<div className={styles.copy}>@ 2024 VITUBE by Tim Zhu</div>
		</aside>
	)
}

export default Sidebar
