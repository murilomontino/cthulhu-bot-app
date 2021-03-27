import sounds  from './sounds'
import categories from './categories'
import { combineReducers } from 'redux'

export default combineReducers({
	SoundsState: sounds,
	CategoriesState: categories
})

