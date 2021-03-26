import {createStore, Store} from 'redux' //applyMiddleware
import rootReducers from './reducer/rootReducer'
import {persistStore,persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import {createLogger} from 'redux-logger'

import { SoundState } from './reducer/sounds/types'
import { CategoriesState } from './reducer/categories/types'

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['rootReducers']
}

export interface ApplicationState {
	SoundsState: SoundState,
	CategoryState: CategoriesState
}

const reducers = persistReducer(persistConfig, rootReducers)
export const store: Store<ApplicationState> = createStore(reducers)
export const persistedStore = persistStore(store) 


