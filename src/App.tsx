import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView  } from 'react-native'
import Navigation from './Navigation'
import css from './styles'

const App = (): JSX.Element => {
	return (
		<SafeAreaView style={css.container}>
			<StatusBar style="auto" />
			<Navigation/>
		</SafeAreaView>
	)
}

export default App



