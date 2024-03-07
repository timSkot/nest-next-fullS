import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	title,
	children
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main className={styles.main}>
				<Sidebar />
				<section className={styles.content}>
					<Header />
					<div className={styles.wrapper}>{children}</div>
				</section>
			</main>
		</>
	)
}

export default Layout
