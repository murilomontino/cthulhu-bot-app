import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import SoundPad from '../../pages/SoundPad'
import { Categories } from './Categories'


const Drawer = createDrawerNavigator()

const DrawerCategories = ():JSX.Element => {
	
		
	return (
		<Drawer.Navigator 
			drawerContent={Categories}>
			<Drawer.Screen name='SoundPad' component={SoundPad}/>
		</Drawer.Navigator>
	)
}

export default DrawerCategories
