import React from 'react'
import { Text} from 'react-native'
import css from './styles'
import SoundList from './soundList'
import { SafeAreaView } from 'react-native-safe-area-context'

const SoundPad = (): JSX.Element => {
	
	return (

		<SafeAreaView style={css.container} >
			<Text style={css.text}>MONYSE GOSTOSA</Text>
			<SoundList/>
		</SafeAreaView>
	)
}



export default SoundPad

