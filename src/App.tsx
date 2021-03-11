import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView  } from 'react-native'
import Authentication from './Authentication'
import css from './styles'
import ContextAuthProvider from './context/ContextAuthentication'
import {Provider} from 'react-redux'
import { store, persistedStore } from './redux'
import { PersistGate } from 'redux-persist/es/integration/react'


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



