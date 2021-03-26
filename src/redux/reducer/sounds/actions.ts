import { Sound, SoundsTypes } from './types'

export interface actionsFunctions {
	addSoundAction(sound:Sound): void
	removeSoundAction(id:number): void,
	reset():void
}

export interface actionType {
	type: SoundsTypes,
	sound?: Sound
}


const addSoundAction = (sound:Sound):actionType =>{
	return {
		type: SoundsTypes.addSound, 
		sound:{
			id: sound.id,
			title: sound.title,
			icon: sound.icon,
			url: sound.url,
			categoria: sound.categoria
		}}
}

const removeSoundAction = (id:number):actionType =>{
	return {
		type: SoundsTypes.removeSound, 
		sound:{
			id: id
		
		}
	}

}

const reset = ():actionType =>{
	return {
		type: SoundsTypes.reset, 
		
	}

}


const actions:actionsFunctions ={
	removeSoundAction,
	addSoundAction,
	reset
}


export default actions
