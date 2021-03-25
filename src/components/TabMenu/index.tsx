import { NavigationContainerRef } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useAuthentication } from '../../context/ContextAuthentication'

import css from './styles'


interface Props{
    navigationRef: NavigationContainerRef | null
}



const TabMenu = ({navigationRef}:Props): JSX.Element => {
	
	const [selector, setSelector] = useState(true)

	const {setIsPrivate} = useAuthentication()

	const size = 32
	const color = '#fff'
    
	const diceClick = () => {
		if (setIsPrivate) {
			setIsPrivate(false)	
		}
		
	}

	const onClick = (route:string)=>{
		navigationRef?.navigate(route)
		const currentRoute = navigationRef?.getCurrentRoute()

		if(currentRoute?.name === 'SoundPad'){
			setSelector(true)
		}else{
			setSelector(false)
		}
			
		
	}

	return (
		<View style={css.container}>
			
			<View style={[css.viewTouchable, {
				backgroundColor: selector? 'rgba(0,0,0, 0.2)': 'transparent'
			}]}>

				<TouchableOpacity 
					style={css.touchableOpacity} 
					onPress={()=> onClick('SoundPad')}>
					<Icon type='material' name='queue-music' size={size} color={color} />
				</TouchableOpacity>

			</View>

			<View style={css.viewTouchable}>

				<TouchableOpacity style={css.touchableOpacity} onPress={diceClick}>
					<Icon type='font-awesome-5' name='dice-d20' size={size} color={color} />
				</TouchableOpacity>

			</View>

			<View style={[css.viewTouchable, {
				backgroundColor: !selector? 'rgba(0,0,0, 0.2)': 'transparent'
			}]}>
				
				<TouchableOpacity
					style={css.touchableOpacity} onPress={()=> onClick('Profile')}>
					<Icon type='font-awesome' name='gear' size={size} color={color} />
				</TouchableOpacity>

			</View>
			
		</View>
	)
}

export default TabMenu
