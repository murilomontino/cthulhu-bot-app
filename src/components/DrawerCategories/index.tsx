import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import SoundPad from '../../pages/SoundPad'
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import css from './styles'
import Category from '../Categories'
import { useSelector } from 'react-redux'
import { Icon } from 'react-native-elements'
import { StateReducer, Sound } from '../../redux/reducer/typesReducer'


const Drawer = createDrawerNavigator()

const getCategories = ()=>{
	const categoriesReducer = useSelector((state:StateReducer) => state.soundPadReducer.sounds.map(sound =>
		sound.categoria)) /// end category 
	
	const categories:string[] = []
	categoriesReducer.forEach(categorias=>categorias?.map(category=>categories.push(category)))
	
	return [ ...new Set( categories ) ]
}

interface Props{
	categories: string[] | undefined
}
const Categories: React.FC<Props> = ({categories}:Props) =>{
	
	const renderCategory = ({item}:{item:string})=>(<Category title={item}/>)

	return (
		<SafeAreaView style={css.container}>
			<View style={css.viewContainer}>
				
				<View style={css.viewTitle}>
					<Text style={css.textTitle}>CATEGORIAS</Text>
				</View>

				
				<FlatList
					data={categories}
					keyExtractor={(item) => item}
					renderItem={renderCategory}
					style={{
						maxHeight: '80%'
					}}
					
				/>
					
				<View style={css.footer}>

					<TouchableOpacity style={css.buttonFooter}>
						<Text style={css.textFooter}>{'SELECT \n ALL'}</Text>
					</TouchableOpacity>
	
					<TouchableOpacity style={css.buttonFooter}>
						<Text style={css.textFooter}>{'DON\'T \nSELECT\nALL'}</Text>
					</TouchableOpacity>
	
					<TouchableOpacity style={css.buttonFooter}>
						<Icon type='material' name='add' size={24} color='#000' />
					</TouchableOpacity>
						
				</View>
			
			</View>
		</SafeAreaView>
	)
}


const DrawerCategories: React.FC = () => {
	
	const categories = getCategories()

	return (
		<Drawer.Navigator 
			drawerContent={()=>Categories({categories})}>
			<Drawer.Screen name='SoundPad' component={SoundPad}/>
		</Drawer.Navigator>
	)
}

export default DrawerCategories
