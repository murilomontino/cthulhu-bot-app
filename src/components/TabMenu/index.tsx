import { NavigationContainerRef, useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import css from './styles'

const TabMenu = (): JSX.Element => {
	const size = 32
	const color = '#4dab66'
    
	const navigation = useNavigation()
	const onClick = (route:string)=>{
		navigation.navigate(route)
	}

	return (
		<View style={css.container}>
			<TouchableOpacity style={css.viewTouchable} onPress={()=> onClick('SoundPad')}>
				<MaterialIcons name='queue-music' size={size} color={color} />
			</TouchableOpacity>

			<TouchableOpacity style={css.viewTouchable}>
				<FontAwesome5 name='dice-d20' size={size} color={color} />
			</TouchableOpacity>
			
			<TouchableOpacity style={css.viewTouchable} onPress={()=> onClick('Profile')}>
				<FontAwesome name='gear' size={size} color={color}/>
			</TouchableOpacity>
		</View>
	)
}

export default TabMenu
