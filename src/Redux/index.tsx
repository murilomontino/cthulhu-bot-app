import {createStore, Store} from 'redux' //applyMiddleware
import rootReducers from './reducer'
import {persistStore,persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { state_reducer, payLoad } from './reducer/typesReducer'
// import {createLogger} from 'redux-logger'

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['soundPadReducer']
}

const reducers = persistReducer(persistConfig, rootReducers)
export const store: Store<state_reducer, payLoad> = createStore(reducers)
export const persistedStore = persistStore(store) 


