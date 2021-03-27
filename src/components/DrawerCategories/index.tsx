import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useSelector } from 'react-redux'
import SoundPad from '../../pages/SoundPad'
import { ApplicationState } from '../../redux'
import Categories from '../Categories'


const Drawer = createDrawerNavigator()

export const getCategories = (): string[] =>{
	const categoriesReducer = useSelector(
		(state:ApplicationState) => state.SoundsState.sounds.map(sound =>sound.categoria)
	) /// end category 
	
	const categories: string[] = []
	categoriesReducer.forEach(categorias=>categorias?.map(category=>categories.push(category)))
	
	return [ ...new Set( categories ) ]
}


const DrawerCategories: React.FC = ()=> {
	
	const categories = getCategories()

	return (
		<Drawer.Navigator 
			drawerContent={()=>Categories({categories})}>
			<Drawer.Screen name='SoundPad' component={SoundPad}/>
		</Drawer.Navigator>
	)
}

export default DrawerCategories
