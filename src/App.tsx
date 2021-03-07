import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView  } from 'react-native'
import Navigation from './Navigation'
import css from './styles'
import ContextAuthProvider from './context/ContextAuthentication'
import {Provider} from 'react-redux'
import store from './context/ContextReduxMusic'

const App = (): JSX.Element => {	


	return (
		<Provider store={store}>
			<SafeAreaView style={css.container}>
				<ContextAuthProvider>
					<Navigation/>
				</ContextAuthProvider>
				<StatusBar style="auto" />
			</SafeAreaView>
		</Provider>
	)
}

export default App



