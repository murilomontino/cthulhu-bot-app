import { 
	ADD_SOUND, 
	DELETE_SOUND,
	EDIT_SOUND,
	EDIT_ICON,
	EDIT_URL
} from '../database/constant'
import INITIAL_STATE from '../database/INITIAL_STATE.json'
import { actionFunction } from '../interfaces'

export const ReducerSounds = (state=INITIAL_STATE, action:actionFunction) =>{
	switch (action.type) {
	case ADD_SOUND:
		return {...state, sounds: [ ...state.sounds, 
			{
				id: action.sound.id,
				title: action.sound.title,
				url: action.sound.url,
				icon: action.sound.icon,
				categoria: action.sound.categoria
			}]}
			
	case DELETE_SOUND:{
		const filter = state.sounds.filter(sound=>sound.id !== action.sound.id)
		return {
			...state,
			sounds: [
				...filter
			]
		}
	}
	case EDIT_SOUND:{
		break
	}
	case EDIT_ICON:{
		break
	}
	case EDIT_URL:{
		break
	}
	
	default:
		return state

	}
}

