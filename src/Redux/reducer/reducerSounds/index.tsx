import INITIAL_STATE from './INITIAL_STATE.json'


const Types = {
	addSound: 'SOUND/ADD',
	removeSound: 'SOUND/REMOVE',
	reset: 'SOUND/RESET',


}

interface payLoad {
	type: string,
	sound: {[key:string]:string|number}
}

interface action {
    type:string,
	sound: {
	id: number,
    title: string,
    url?: string|undefined,
    icon?: string|undefined,
    categoria?: Array<string>|undefined 
	}
}


export const ReducerSounds = (state=INITIAL_STATE, action:action): typeof INITIAL_STATE =>{
	switch (action.type) {
	case Types.addSound:
		return {...state, sounds: [ ...state.sounds, 
			{
				id: action.sound.id,
				title: action.sound.title,
				url: action.sound.url,
				icon: action.sound.icon,
				categoria: action.sound.categoria
			}]}
			
	case Types.removeSound:{
		const filter = state.sounds.filter(sound=>sound.id !== action.sound.id)
		return {
			...state,
			sounds: [
				...filter
			]
		}
	}
	
	case Types.reset:
		return INITIAL_STATE //Always return the initial state
	
	default:
		return state

	}
}


// ACTIONS

const addSoundAction = (title:string, id:number): payLoad =>{
	return {
		type: Types.addSound, 
		sound:{
			id: id,
			title: title
		}}
}

const removeSoundAction = (id:number): payLoad =>{
	return {
		type: Types.removeSound, 
		sound:{
			id: id,
		}
	}

}

const resetSound = (): payLoad =>{
	return {
		type: Types.reset, 
		sound:{
			
		}
	}

}


const actions ={
	removeSoundAction,
	addSoundAction,
	resetSound
}


export default actions

