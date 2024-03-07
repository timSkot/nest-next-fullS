import { FC } from 'react'
import { IMenuItem } from './menu.interface'

import styles from './menu.module.scss'
import MenuItem from './MenuItem'
import Line from '../../../ui/Line'

interface IMenu {
	title: string
	items: IMenuItem[]
}

const Menu: FC<IMenu> = ({ items, title }) => {
	return (
		<nav className={styles.mnu_sidebar}>
			<h3>{title}</h3>
			<ul>
				{items.map(menuItem => (
					<MenuItem item={menuItem} key={menuItem.link} />
				))}
			</ul>
			<Line />
		</nav>
	)
}

export default Menu
