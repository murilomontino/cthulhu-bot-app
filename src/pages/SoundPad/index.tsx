import React from 'react'
import { Text, View } from 'react-native'
import css from './styles'
import SoundList from './soundList'

const SoundPad = (): JSX.Element => {
	
	return (

		<View style={css.container} >
			<Text style={css.text}>MONYSE GOSTOSA</Text>
			<SoundList/>
		</View>
	)
}



export default SoundPad

