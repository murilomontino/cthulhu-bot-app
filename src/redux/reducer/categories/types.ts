// Action Types
export enum CategoriesTypes  {
	addCategory = 'CATEGORY/ADD',
	removeCategory = 'CATEGORY/REMOVE',
	initialCategory = 'CATEGORY/INIT'
}

// Data Types
export type Category = string | undefined

// State Type
export interface CategoriesState {
	readonly initialCategories: boolean,
    readonly categories: Category[] 
}