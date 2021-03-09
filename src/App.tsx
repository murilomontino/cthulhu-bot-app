import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView  } from 'react-native'
import Navigation from './Navigation'
import css from './styles'
import ContextAuthProvider from './contextGlobals/ContextAuthentication'
import {Provider} from 'react-redux'
import { store, persistedStore } from './contextGlobals/Redux'
import { PersistGate } from 'redux-persist/es/integration/react'


const App = (): JSX.Element => {	


	return (
		<Provider store={store}>
			<PersistGate persistor={persistedStore} loading={null}>
			<SafeAreaView style={css.container}>
				<ContextAuthProvider>
					<Navigation/>
				</ContextAuthProvider>
				<StatusBar style="auto" />
			</SafeAreaView>
			</PersistGate>
		</Provider>
	)
}

export default App



