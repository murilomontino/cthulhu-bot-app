import React, { useEffect, useState } from 'react'
import { View, Text, Animated, TextInput, ScrollViewComponent } from 'react-native'
import { Avatar, Divider, } from 'react-native-elements'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import css from './styles'


interface Props{
	fadeAnim: Animated.Value,
	open: boolean
}


const CreateSound:React.FC<Props> = ({open, fadeAnim}:Props) => {
	
	

	return (
		<Animated.View 
			style={[css.viewContainer, {
				display: open? 'flex': 'none',
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
			<ScrollView>
				<View style={css.inputView}>
					<TextInput style={css.inputStyle } placeholder='Titulo'/>
					<TextInput style={css.inputStyle } placeholder='Url'/>
					<TextInput style={css.inputStyle } placeholder='Categorias'/>
				</View>
				<View style={{
					flex: 1,
					flexDirection: 'row-reverse',
					alignSelf: 'center'
				}}>
					<TouchableOpacity>
						<Text style={css.touchableOptions}>Adicionar</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text style={css.touchableOptions}>Cancelar</Text>
					</TouchableOpacity>

				</View>
			</ScrollView>

		</Animated.View>
		
		
	)
}

export default CreateSound



