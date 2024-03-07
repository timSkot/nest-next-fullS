import { Provider } from 'react-redux'
import { persistor, store } from '../app/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import NextNProgress from 'nextjs-progressbar'
import { TypeComponentAuthFields } from '../app/providers/private-route.interface'
import { AppProps } from 'next/app'
import '../app/styles/globals.scss'
import ReduxToastr from 'react-redux-toastr'
import AuthProvider from '../app/providers/AuthProvider'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<>
			<NextNProgress
				color='#FF7652'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<AuthProvider Component={Component}>
						<Component {...pageProps} />
						<ReduxToastr
							newestOnTop={false}
							preventDuplicates
							progressBar
							closeOnToastrClick
							timeOut={4000}
							transitionIn='fadeIn'
							transitionOut='fadeOut'
						/>
					</AuthProvider>
				</PersistGate>
			</Provider>
		</>
	)
}

export default MyApp
