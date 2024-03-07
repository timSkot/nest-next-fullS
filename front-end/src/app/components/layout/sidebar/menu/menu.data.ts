import { IMenuItem } from './menu.interface'
import { HiChartBar, HiCollection, HiHome, HiStar } from 'react-icons/hi'

export const menu: IMenuItem[] = [
	{
		title: 'Home',
		icon: HiHome,
		link: '/'
	},
	{
		title: 'Trends',
		icon: HiChartBar,
		link: '/trending'
	},
	{
		title: 'My Channel',
		icon: HiStar,
		link: '/my-channel'
	},
	{
		title: 'My subscriptions',
		icon: HiCollection,
		link: '/subscriptions'
	}
]
