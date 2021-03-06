import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { View, Text } from 'react-native'
import css from './styles'

const Home = (): JSX.Element => {
	AsyncStorage.clear()
	return (
		<View style={css.container} >
			<Text style={css.text}>MONYSE GOSTOSA</Text>
		</View>
	)
}



export default Home

