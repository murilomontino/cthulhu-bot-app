import { ReducerSounds } from './reducerSounds'
import { combineReducers } from 'redux'

interface sound {
    id: number,
    title: string,
    url?: string|undefined,
    icon?: string|undefined,
    categoria?: Array<string>|undefined 
}

export interface state {
	soundPadReducer: {
        sounds: sound[]
    }
	
}

export default combineReducers({
	soundPadReducer: ReducerSounds,
})

