import { NavigationContainerRef } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

import css from './styles'


interface Props{
    navigation: NavigationContainerRef | null,
}



const TabMenu: React.FC<Props> = ({navigation}:Props) => {
	
	const [selector, setSelector] = useState(true)


	const size = 32
	const color = '#fff'
    

	const onRouteClick = (route:string)=>{
		if(navigation){
			navigation.navigate(route)
			const currentRoute = navigation.getCurrentRoute()
	
			if(currentRoute && currentRoute.name === 'SoundPad'){
				setSelector(true)
			}else{
				setSelector(false)
			}
		}
			
		
	}

	return (
		<View style={css.container}>
			
			<View style={[css.viewTouchable, {
				backgroundColor: selector? 'rgba(0,0,0, 0.2)': 'transparent'
			}]}>

				<TouchableOpacity 
					style={css.touchableOpacity} 
					onPress={()=> onRouteClick('SoundPad')}>
					<Icon type='material' name='queue-music' size={size} color={color} />
				</TouchableOpacity>

			</View>

			<View style={css.viewTouchable}>

				<TouchableOpacity style={css.touchableOpacity}>
					<Icon type='font-awesome-5' name='dice-d20' size={size} color={color} />
				</TouchableOpacity>

			</View>

			<View style={[css.viewTouchable, {
				backgroundColor: !selector? 'rgba(0,0,0, 0.2)': 'transparent'
			}]}>
				
				<TouchableOpacity
					style={css.touchableOpacity} onPress={()=> onRouteClick('Profile')}>
					<Icon type='font-awesome' name='gear' size={size} color={color} />
				</TouchableOpacity>

			</View>
			

		</View>
	)
}

export default TabMenu
