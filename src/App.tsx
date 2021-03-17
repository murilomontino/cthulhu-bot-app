import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { store, persistedStore } from './redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import css from './styles'
import ContextAuthProvider from './context/ContextAuthentication'
import Authentication from './Authentication'
import { LinearGradient } from 'expo-linear-gradient'



const App = (): JSX.Element => {	

	return (
		<SafeAreaProvider>

			<Provider store={store}>

				<PersistGate persistor={persistedStore} loading={null}>

					<SafeAreaView style={css.container}>
						<LinearGradient 
							colors={['#4dab66', '#27b34c', '#047021']} 
							style={css.linearGradient}

						>
							
							<ContextAuthProvider>

								<Authentication/>

							</ContextAuthProvider>

						</LinearGradient  >
					</SafeAreaView>

				</PersistGate>
			
			</Provider>
			<StatusBar style='auto' hidden/>

		</SafeAreaProvider>
	)
}

export default App



