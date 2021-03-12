import React, {useEffect, useRef, useState} from 'react'
import { enableScreens } from 'react-native-screens'
import {   DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Profile from '../../pages/Profile'
import DrawerCategories from '../DrawerCategories'
import TabMenu from '../TabMenu'

import Entypo from 'react-native-vector-icons/Entypo'
import { TouchableOpacity } from 'react-native-gesture-handler'
import css from './styles'

enableScreens()
const Stack = createStackNavigator()
const themeDefault = {
	dark: true,
	colors:  {
		background: '#4dab66',
		card: '#fff',
		primary: '#000', // Tela Em Escolha
		text: '#000',
		notification: '#fff',
		border: '#000'
	}
}
const ButtonDrawer = ()=> {

	const navigation = useNavigation()
	const onClick = () => {
		navigation.dispatch(DrawerActions.toggleDrawer())
	}
	
	return (
		<TouchableOpacity style={css.touchable} onPress={onClick}>
			<Entypo name='menu' size={32} color='#000' style={css.iconDrawer}/>
		</TouchableOpacity>
	)}
	
const Navigation = ():JSX.Element => {

	
	return (
		<NavigationContainer theme={themeDefault} >
			<Stack.Navigator>
				<Stack.Screen
		
					name='SoundPad' 
					component={DrawerCategories}
					options={{
						headerLeft:ButtonDrawer,
					}}
				/>
				<Stack.Screen name='Profile' component={Profile}/>
			</Stack.Navigator>

			<TabMenu/>
		</NavigationContainer>
		
	)
}

export default Navigation
