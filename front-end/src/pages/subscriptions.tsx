import { NextPageAuth } from '../app/providers/private-route.interface'
import { api } from '../app/store/api/api'
import Layout from '../app/components/layout/Layout'
import Menu from '../app/components/layout/sidebar/menu/Menu'

const MySubscriptionsPage: NextPageAuth = () => {
	const { data } = api.useGetProfileQuery(null)
	return (
		<Layout title='My subscribtions'>
			<Menu
				title='My subscribtions'
				items={
					data?.subscriptions.map(({ toChannel }) => ({
						title: toChannel.name,
						image: toChannel.avatarPath,
						link: `/c/${toChannel.id}`
					})) || []
				}
			/>
		</Layout>
	)
}

MySubscriptionsPage.isOnlyUser = true

export default MySubscriptionsPage
