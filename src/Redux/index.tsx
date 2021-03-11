import {createStore} from 'redux' //applyMiddleware
import rootReducers from './reducer'
import {persistStore,persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import {createLogger} from 'redux-logger'

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['soundPadReducer']
}

const reducers = persistReducer(persistConfig, rootReducers)
export const store = createStore(reducers)
export const persistedStore = persistStore(store) 


