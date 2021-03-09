import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { View, Text, Platform } from 'react-native'
import css from './styles'
import SoundList from './components/soundList'


const Home = (): JSX.Element => {
	// AsyncStorage.clear()
	
	return (
		<View style={css.container} >
			<Text style={css.text}>MONYSE GOSTOSA</Text>
			<SoundList/>
		</View>
	)
}



export default Home

