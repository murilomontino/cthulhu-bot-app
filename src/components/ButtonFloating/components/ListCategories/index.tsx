import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import Category from '../../../Categories'


interface sound {
    id: number,
    title: string,
    url?: string|undefined,
    icon?: string|undefined,
    categoria?: Array<string>|undefined 
}

interface state {
	soundPadReducer: {
        sounds: sound[]
    }
}

const getCategories = ()=>{
	const categoriesReducer = useSelector((state:state) => state.soundPadReducer.sounds.map(sound =>
		sound.categoria)) /// end category 
	
	const categories:string[] = []
	categoriesReducer.forEach(categorias=>categorias?.map(category=>categories.push(category)))
	
	return [ ...new Set( categories ) ]
}

const ListCategories = ():JSX.Element => {
	
	const DATA = getCategories()
	
	const renderCategory = ({ item }:{item:string}) => (
		<Category title={item} />
	) 

	return (
		<FlatList
			data={DATA}
			keyExtractor={(item) => item}
			renderItem={renderCategory}
		/>
	)
}

export default ListCategories
