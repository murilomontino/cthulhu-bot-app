import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../../redux/reducer'
import actions from '../../redux/reducer/reducerSounds'

interface sound {
    id: number,
    title?: string,
    url?: string|undefined,
    icon?: string|undefined,
    categoria?: Array<string>|undefined 
}

const getIDValid = ()=>{
	return Math.floor(Math.random() * 65536)
}

const SoundList = ():JSX.Element => {
	
	const sounds = useSelector((state:state) => state.soundPadReducer.sounds )

	
	const dispatch = useDispatch()
	
	const { addSoundAction, removeSoundAction, resetSound} = actions
	const removeClick = (id:number)=>{
		dispatch(removeSoundAction(id))	
	}
	const actionClick = (sound:sound)=>{
		dispatch(addSoundAction({
			id: sound.id,
			title: sound.title,
			url: sound.url,
			icon: sound.icon,
			categoria: sound.categoria
		}))
	}
	const clickReset =()=>{
		dispatch(resetSound())
	}
	return (
		
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
			<Button title='Reset' onPress={clickReset}/>
		</View>
			

		
	)
}

export default SoundList
