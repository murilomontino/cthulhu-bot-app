import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../../redux/reducer'
import actions from '../../redux/reducer/reducerSounds'

const SoundList = ():JSX.Element => {
	const sounds = useSelector((state:state) => state.soundPadReducer.sounds )
	const dispatch = useDispatch()
	
	const { addSoundAction, removeSoundAction, resetSound} = actions
	const removeClick = (id:number)=>{
		dispatch(removeSoundAction(id))	
	}
	const actionClick = (title='Monyse GOSTOSA', id:number)=>{	
		// console.log(addSoundAction(title))
		dispatch(addSoundAction(title, id))
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
					} key={sound.id}>
						<Text>
							{sound.title}
						</Text>
						<Button title='X' onPress={()=>removeClick(sound.id)}/>
					</View>)
				)}	
			</View>
			<Button title='ADD' onPress={()=>actionClick('click', 3)}/>
			<Button title='reset' onPress={clickReset}/>

		</>
	)
}

export default SoundList
