import React from 'react'
import CheckBox from '@react-native-community/checkbox'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import css from './styles.js'

const Category = ():JSX.Element =>{

	return (
		<View style={css.viewCategory}>
			<TouchableOpacity style={css.touchableCategory}>
				<FontAwesome5 name='edit' size={18} color='#000' style={css.icon}/>
			</TouchableOpacity>
			<Text style={css.textCategory}>Ação</Text>
			
			<CheckBox style={css.checkBox}/>
			
		</View>
	)
}

export default Category