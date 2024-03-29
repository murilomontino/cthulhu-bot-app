import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import actions from '../../redux/reducer/sounds/actions'
import { Sound as SoundType } from '../../redux/reducer/sounds/types'
import { ApplicationState } from '../../redux'

import css from './styles'

const getIDValid = ()=>{
	return Math.floor(Math.random() * 65536)
}

interface Props {
	sound: SoundType
}

const Sound: React.FC<Props> = ({sound}:Props)=>{
	
	const dispatch = useDispatch()

	const { removeSoundAction } = actions
	const removeClick = (id:number)=>{
		dispatch(removeSoundAction(id))	
	}
	
	return(
		<View style={
			{
				flexDirection: 'row'
			}
		}>
			<Text>
				{sound.title}
			</Text>
			<Button title='X' onPress={()=>removeClick(sound.id)}/>
		</View>
	)
}

const SoundList: React.FC = () => {
	
	const sounds = useSelector((state:ApplicationState) => state.SoundsState.sounds )
	
	
	
	const dispatch = useDispatch()
	
	const { reset } = actions
	

	const clickReset =()=>{
		dispatch(reset())
	}
	return (
		
		<View style={css.container}>
			

			<View style={{
				flex:1,
				flexDirection: 'row'
			}}>
				{ sounds.map(sound=>(<Sound sound={sound} key={sound.id}/>)
				)}
			</View>
			<Button title='Reset' onPress={clickReset}/>
		</View>
			

		
	)
}

export default SoundList
