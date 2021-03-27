import React from 'react'
import { View, Text, Animated, TextInput } from 'react-native'
import { Avatar, Divider, } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

import css from './styles'

interface Props {
    visible: boolean,
    fadeAnim: Animated.Value

}

const CreateSound: React.FC<Props> = ({visible, fadeAnim}:Props)=> {
	
	return (
		<Animated.View 
			style={[css.viewContainer, {
				display: visible? 'flex': 'none',
				opacity: fadeAnim,

			}]}>
		
			<Avatar
				rounded
				icon={{
					name: 'user', 
					type: 'font-awesome',
					color: '#000'
				}}
				onPress={() => console.log('Works!')}
				activeOpacity={0.7}
				size='large'
				containerStyle={css.avatarStyle}
			/>
			<Divider/>
			
			<TextInput style={css.inputStyle } placeholder='Titulo'/>
			
			<View style={{
				flex: 1,
				flexDirection: 'row-reverse'
			}}>
				<TouchableOpacity>
					<Text style={css.touchableOptions}>Adicionar</Text>
				</TouchableOpacity>

				<TouchableOpacity>
					<Text style={css.touchableOptions}>Cancelar</Text>
				</TouchableOpacity>

			</View>
		</Animated.View>
		
		
	)
}

export default CreateSound



