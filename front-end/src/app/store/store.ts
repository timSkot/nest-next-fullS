import { rootReducer } from './root-reducer'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { rtkQueryErrorLogger } from './middlewares/error.middleware'
import { api } from './api/api'

const createNoopStorage = () => {
	return {
		getItem(_key: string) {
			return Promise.resolve(null)
		},
		setItem(_key: string, value: any) {
			return Promise.resolve(value)
		},
		removeItem(_key: string) {
			return Promise.resolve()
		}
	}
}

const storage =
	typeof window !== 'undefined'
		? createWebStorage('local')
		: createNoopStorage()

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
			.concat(rtkQueryErrorLogger)
			.concat(api.middleware)
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
