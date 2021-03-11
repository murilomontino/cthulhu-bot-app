import Types from '../../database/constant.js'

interface payLoad {
	type: string,
	sound: {[key:string]:string|number}
}

const addSoundAction = (): payLoad =>{
	return {
		type: Types.ADD_SOUND, 
		sound:{
			// id: id,
			title: 'Monyse Gostosa'	
		}}
}

const removeSoundAction = (id:number): payLoad =>{
	return {
		type: Types.DELETE_SOUND, 
		sound:{
			id: id,
		}
	}

}

const resetSound = (): payLoad =>{
	return {
		type: Types.RESET, 
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

