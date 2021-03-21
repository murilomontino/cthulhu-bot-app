import React, { Dispatch, SetStateAction, useState } from 'react'
import { Animated } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon} from 'react-native-elements'

import css from './styles'

type toValue = 1 | 0

interface Props{
	fadeAnim: Animated.Value,
	setToValue: Dispatch<SetStateAction<toValue>>,
	toValue: toValue,
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}



const ButtonFloating: React.FC<Props> = ({fadeAnim, toValue, setToValue, setOpen, open }:Props) => {
	

	const fadeInOut = () => {
		setToValue(toValue===1? 0:1)
		
		switch (toValue) {
		case 0:
			setTimeout(() => {
				setOpen(!open)
			}, 250)
			break
		
		case 1:
			setOpen(!open)
		}
		
		Animated.timing(fadeAnim, {
			toValue,
			duration: 250,
			useNativeDriver: true,
		}).start()
		
		
	}
	
	return (
		
		<TouchableOpacity
			activeOpacity={0.2}
			style={css.buttonFloating}
			onPress={fadeInOut}
		>
			<Icon type='MaterialIcons' name='add' color='#000' size={30}/>
		</TouchableOpacity>
		
	)
}

export default ButtonFloating
