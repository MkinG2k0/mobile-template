import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Data } from 'Redux/Slices/Data/Data.Slice'
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
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({ Data })

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['none']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat()
})

export const persist = persistStore(store)
