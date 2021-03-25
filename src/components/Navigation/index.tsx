import React, {useEffect, useRef, useState} from 'react'
import { enableScreens } from 'react-native-screens'
import {   DrawerActions, NavigationContainer, NavigationContainerRef, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Profile from '../../pages/Profile'
import DrawerCategories from '../DrawerCategories'
import TabMenu from '../TabMenu'

import { TouchableOpacity } from 'react-native-gesture-handler'
import css from './styles'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'

// enableScreens()
const Stack = createStackNavigator()
const themeDefault = {
	dark: true,
	colors:  {
		background: 'transparent',
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
			<Icon type='Entypo' name='menu' size={32} color='#000' containerStyle={css.iconDrawer} />
		</TouchableOpacity>
	)}
	
const Navigation = ():JSX.Element => {

	const [loading, setLoading] = useState(true)
	const navigationRef = useRef<NavigationContainerRef>(null)

	useEffect(() => {
		if(navigationRef !== null)
			setLoading(false)
		
	}, [])


	return (
		<NavigationContainer theme={themeDefault} ref={navigationRef} >
			<Stack.Navigator screenOptions={{
				headerTitleAlign: 'center',
				headerStatusBarHeight: 1

			}}
			>
				<Stack.Screen
		
					name='SoundPad' 
					component={DrawerCategories}
					options={{
						headerLeft:ButtonDrawer
					}}
				/>
				<Stack.Screen 
					name='Profile'
					component={Profile}
					options={{
						headerLeft:function HeaderLeft(props){
							return <View {...props}/>
						},
						title: 'Configurações'
					}}
				/>
			</Stack.Navigator>

			{!loading && <TabMenu navigationRef={navigationRef.current}/>}
		</NavigationContainer>
		
	)
}

export default Navigation
