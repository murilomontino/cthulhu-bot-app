// import CheckBox from '@react-native-community/checkbox'
import React from 'react'
import { View, Text, CheckBox } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import css from './styles'

export const Categories = ():JSX.Element =>{
	return (
		<SafeAreaView style={css.container}>
			<View style={css.viewContainer}>
				
				<View style={css.viewTitle}>
					<Text style={css.textTitle}>CATEGORIAS</Text>
				</View>
				
				<View style={css.viewCategories}>
					
					<View style={css.viewCategory}>
						<TouchableOpacity style={css.touchableCategory}>
							<FontAwesome5 name='edit' size={18} color='#000' style={css.icon}/>
						</TouchableOpacity>
						<Text style={css.textCategory}>Ação</Text>
						<CheckBox style={css.checkBox}/>
					</View>

				</View>
				<View style={css.footer}>

					<TouchableOpacity style={css.buttonFooter}>
						<Text style={css.textFooter}>{'SELECT \n ALL'}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={css.buttonFooter}>
						<Text style={css.textFooter}>{'DON\'T \nSELECT\nALL'}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={css.buttonFooter}>
						<MaterialIcons name='add' size={24}/>						
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}