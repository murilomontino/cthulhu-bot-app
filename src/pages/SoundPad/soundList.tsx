import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { actions, state } from '../../Redux'

const SoundList = ():JSX.Element => {
	const sounds = useSelector((state:state) => state.soundPadReducer.sounds )
	const dispatch = useDispatch()
	
	const {addSoundAction, removeSoundAction, resetSound} = actions
	const removeClick = (id:number)=>{
		dispatch(removeSoundAction(id))	
	}
	const actionClick = ()=>{	
		dispatch(addSoundAction())
	}
	
	const clickReset =()=>{
		dispatch(resetSound())
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
			<Button title='reset' onPress={clickReset}/>

		</>
	)
}

export default SoundList
