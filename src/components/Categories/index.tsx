import React from 'react'

import CheckBox from '@react-native-community/checkbox'
import { View, Text, CheckBox as CheckBoxDeprecated, Platform } from 'react-native'
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
			{Platform.OS==='web'?
				<CheckBox style={css.checkBox}/>:
				<CheckBoxDeprecated style={css.checkBox}/>
			}
		</View>
	)
}

export default Category