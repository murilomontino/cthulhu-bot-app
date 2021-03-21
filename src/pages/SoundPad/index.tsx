import React, { useRef, useState } from 'react'
import { Animated, ScrollView, View } from 'react-native'
import css from './styles'
import SoundList from '../../components/SoundList'
import ButtonFloating from '../../components/ButtonFloating'
import CreateSound from '../../components/CreateSound'

type toValue = 1 | 0

const SoundPad: React.FC = () => {
	
	
	const fadeAnim = useRef(new Animated.Value(0)).current
	const [toValue, setToValue] = useState<toValue>(1)
	const [open, setOpen] = useState(false)

	
	return (
		
		<View style={css.container}	>
			<CreateSound open={open} fadeAnim={fadeAnim}/>
			
			<ScrollView>
				
				<SoundList/>

			</ScrollView>
			
			
			
			<View style={css.buttonFloating}>
				<ButtonFloating 
					toValue={toValue} 
					open={open}
					setOpen={setOpen} 
					setToValue={setToValue} 
					fadeAnim={fadeAnim}
				/>
			</View>
			
		</View>
		
		
	)
}



export default SoundPad

