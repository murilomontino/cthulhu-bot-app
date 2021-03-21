/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Sound, SoundState , ActionSound } from '../typesReducer'
import INITIAL_STATE from './INITIAL_STATE.json'


const Types = {
	addSound: 'SOUND/ADD',
	removeSound: 'SOUND/REMOVE',
	reset: 'SOUND/RESET',
}

export const ReducerSounds = (state:SoundState=INITIAL_STATE, action:ActionSound) => {
	switch (action.type) {
	case Types.addSound:
		return {...state, sounds: [ ...state.sounds, 
			{
				id: action.sound?.id,
				title: action.sound?.title,
				url: action.sound?.url,
				icon: action.sound?.icon,
				categoria: action.sound?.categoria
			}]}
			
	case Types.removeSound:{
		const filter = state.sounds.filter(sound=>sound.id !== action.sound?.id)
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

const addSoundAction = (sound:Sound): ActionSound =>{
	return {
		type: Types.addSound, 
		sound:{
			id: sound.id,
			title: sound.title,
			icon: sound.icon,
			url: sound.url,
			categoria: sound.categoria
		}}
}

const removeSoundAction = (id:number): ActionSound =>{
	return {
		type: Types.removeSound, 
		sound:{
			id: id
		
		}
	}

}

const resetSound = (): ActionSound =>{
	return {
		type: Types.reset, 
		
	}

}


const actions ={
	removeSoundAction,
	addSoundAction,
	resetSound
}


export default actions

