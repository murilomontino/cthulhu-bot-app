import { Category, CategoriesTypes } from './types'

export interface actionsFunctions {
	addCategory(category:Category): void,
	removeCategory(category:Category): void
}



export type actionTypes = {
	type: CategoriesTypes,
	category?: Category,
	categories?: Category[]
}



const addCategory = (category:Category):actionTypes =>{
	return {
		type: CategoriesTypes.addCategory, 
		category
	}
}

const removeCategory = (category:Category):actionTypes =>{
	return {
		type: CategoriesTypes.removeCategory, 
		category
	}

}



const actions:actionsFunctions ={
	addCategory,
	removeCategory
}


export default actions
