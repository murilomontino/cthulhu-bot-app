import React from 'react'
import { ScrollView, View } from 'react-native'
import css from './styles'
import SoundList from '../../components/SoundList'
import ButtonFloating from '../../components/ButtonFloating'


const SoundPad: React.FC = () => {
	

	return (
		
		<View style={css.container}	>
			
			<ScrollView>
				
				<SoundList/>

			</ScrollView>
			
			<View style={css.buttonFloating}>
				<ButtonFloating/>
			</View>
			
		</View>
		
		
	)
}



export default SoundPad

