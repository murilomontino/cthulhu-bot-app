import React, { useRef, useState } from 'react'
import { Animated, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon} from 'react-native-elements'

import css from './styles'

import CreateSound from '../CreateSound'

const ButtonFloating: React.FC = () => {
	
	const [visible, setVisible] = useState(false)
	
	const fadeAnim = useRef(new Animated.Value(0)).current


	const fadeIn = ()=>{
		setVisible(true)
		Animated.timing(fadeAnim, {
			useNativeDriver: true,
			toValue: 1,
			duration: 250,
		}).start()
	}
	const fadeOut = ()=>{
		Animated.timing(fadeAnim, {
			useNativeDriver: true,
			toValue: 0,
			duration: 250
		}).start()
		setTimeout(()=>setVisible(false), 250)
		
	}

	return (
		<View style={css.container}>
			
		
			<CreateSound visible={visible} fadeAnim={fadeAnim}/>
			
			<TouchableOpacity
				activeOpacity={0.2}
				style={css.buttonFloating}
				onPress={visible? fadeOut:fadeIn}
			>
				<Icon type='MaterialIcons' name='add' color='#000' size={30}/>
			</TouchableOpacity>
		</View>
	)
}

export default ButtonFloating
