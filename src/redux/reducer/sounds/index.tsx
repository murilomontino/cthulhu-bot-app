import { SoundState, SoundsTypes } from './types'
import initial_sounds from './initial_sounds.json'
import { Reducer } from 'redux'

const INITIAL_STATE: SoundState  = {
	sounds: initial_sounds.sounds
} 


const reducer: Reducer<SoundState> = (state=INITIAL_STATE, action) => {
	switch (action.type) {
	case SoundsTypes.addSound:
		return {...state, sounds: [ ...state.sounds, 
			{
				id: action.sound?.id,
				title: action.sound?.title,
				url: action.sound?.url,
				icon: action.sound?.icon,
				categoria: action.sound?.categoria
			}]}
			
	case SoundsTypes.removeSound:{
		const filter = state.sounds.filter(sound=>sound.id !== action.sound?.id)
		console.log('chega aki')
		
		return {
			...state,
			sounds: [
				...filter
			]
		}
	}
	
	case SoundsTypes.reset:
		return INITIAL_STATE //Always return the initial state
	
	default:
		return state

	}
}


export default reducer
