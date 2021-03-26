import { Reducer } from 'redux'
import { CategoriesTypes, CategoriesState, Category } from './types'
import { actionTypes } from './actions'

const INITIAL_STATE: CategoriesState = {
	initialCategories: false,
	categories: ['Sem Categoria']
} 


const reducer: Reducer<CategoriesState, actionTypes> = (state=INITIAL_STATE, action): CategoriesState => {
	
	switch (action.type) {

	case CategoriesTypes.addCategory:{
		
		return {
			...state,
			categories: [
				...state.categories,
				action.category
			]
		}
	}
	
	case CategoriesTypes.removeCategory:{
		const filter = state.categories?.filter(category=>category !== action.category)
		return {
			...state,
			categories: [
				...filter
			]
		}

	}

	case CategoriesTypes.initialCategory:{

		const categories = action.categories?.map((category:Category)=>category)
		if (categories) {
			return {
				initialCategories: true,
				categories:[
					...state.categories,
					...categories
				]
			}
		}
		return state
	}

	default:
		return state

	}
}


export default reducer