const addSoundAction = () =>{
	return {
		type: 'ADD_SOUND', 
		sound:{
			// id: id,
			title: 'Monyse Gostosa'	
		}}
}

const removeSoundAction = (id:number) =>{
	return {
		type: 'DELETE_SOUND', 
		sound:{
			id: id,
		}
	}

}

const actions ={
	removeSoundAction,
	addSoundAction
}


export default actions

