import {createStore, Store} from 'redux' //applyMiddleware
import rootReducers from './reducer/rootReducer'
import {persistStore,persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import {createLogger} from 'redux-logger'

import { SoundState } from './reducer/sounds/types'

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['soundPadReducer']
}

export interface ApplicationState {
	SoundState: SoundState
}

const reducers = persistReducer(persistConfig, rootReducers)
export const store: Store<ApplicationState> = createStore(reducers)
export const persistedStore = persistStore(store) 


