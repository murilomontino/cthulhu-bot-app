import React, {useContext} from 'react'
import { View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { state } from '../../../../context/ContextReduxMusic'
import actions from '../../../../context/ContextReduxMusic/contextActions'


const SoundList = ():JSX.Element => {
	const sounds = useSelector((state:state) => state.sounds)
	const dispatch = useDispatch()
	const {addSoundAction, removeSoundAction} = useContext(actions)
	const removeClick = (id:number)=>{
		dispatch(removeSoundAction(id))
	}
	const actionClick = ()=>{
		dispatch(addSoundAction())
	}
	
    
	return (
		<>
			<View>
				{ sounds.map(sound=>
					(<View style={
						{
							flexDirection: 'row'
						}
					} key={sound.title}>
						<Text>
							{sound.title}
						</Text>
						<Button title='X' onPress={()=>removeClick(sound.id)}/>
					</View>)
				)}	
			</View>
			<Button title='ADD' onPress={actionClick}/>
		</>
	)
}

export default SoundList
