import Types from '../../database/constant'
import INITIAL_STATE from '../../database/INITIAL_STATE.json'
import { actionFunction } from '../..'

export const ReducerSounds = (state=INITIAL_STATE, action:actionFunction) =>{
	switch (action.type) {
	case Types.ADD_SOUND:
		return {...state, sounds: [ ...state.sounds, 
			{
				id: action.sound.id,
				title: action.sound.title,
				url: action.sound.url,
				icon: action.sound.icon,
				categoria: action.sound.categoria
			}]}
			
	case Types.DELETE_SOUND:{
		const filter = state.sounds.filter(sound=>sound.id !== action.sound.id)
		return {
			...state,
			sounds: [
				...filter
			]
		}
	}
	case Types.EDIT_SOUND:{
		break
	}
	case Types.EDIT_ICON:{
		break
	}
	case Types.EDIT_URL:{
		break
	}
	case Types.RESET:

		return INITIAL_STATE //Always return the initial state
	
	default:
		return state

	}
}

