import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView  } from 'react-native'
import Navigation from './Navigation'
import css from './styles'
import ContextAuthProvider from './context/ContextAuthentication'


const App = (): JSX.Element => {	


	return (
		<SafeAreaView style={css.container}>
			<ContextAuthProvider>
				<Navigation/>
			</ContextAuthProvider>
			<StatusBar style="auto" />
		</SafeAreaView>
	)
}

export default App



