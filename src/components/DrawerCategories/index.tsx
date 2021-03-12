import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import SoundPad from '../../pages/SoundPad'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import css from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Category from '../Categories'

const Drawer = createDrawerNavigator()

const Categories = ():JSX.Element =>{
	return (
		<SafeAreaView style={css.container}>
			<View style={css.viewContainer}>
				
				<View style={css.viewTitle}>
					<Text style={css.textTitle}>CATEGORIAS</Text>
				</View>
				
				<View style={css.viewCategories}>
					
					<Category/>

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


const DrawerCategories = ():JSX.Element => {
	
		
	return (
		<Drawer.Navigator 
			drawerContent={Categories}>
			<Drawer.Screen name='SoundPad' component={SoundPad}/>
		</Drawer.Navigator>
	)
}

export default DrawerCategories
