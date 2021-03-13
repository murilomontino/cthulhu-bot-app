import React from 'react'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Provider } from 'react-redux'
import { store, persistedStore } from './redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import css from './styles'
import ContextAuthProvider from './context/ContextAuthentication'
import Authentication from './Authentication'



const App = (): JSX.Element => {	


	return (
		<Provider store={store}>

			<PersistGate persistor={persistedStore} loading={null}>

				<SafeAreaView style={css.container}>

					<ContextAuthProvider>

						<Authentication/>

					</ContextAuthProvider>

					<StatusBar style="auto" />

				</SafeAreaView>

			</PersistGate>
			
		</Provider>
	)
}

export default App



