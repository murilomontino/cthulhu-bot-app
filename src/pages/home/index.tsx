import React from 'react'
import { View, Text } from 'react-native'
import css from './styles'
import SoundList from './soundList'


const Home = (): JSX.Element => {
	
	return (
		<View style={css.container} >
			<Text style={css.text}>MONYSE GOSTOSA</Text>
			<SoundList/>
		</View>
	)
}



export default Home

