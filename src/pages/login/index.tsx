import React, { useState } from 'react'
import { View, TextInput, Image, TouchableOpacity, Text, Alert } from 'react-native'
import css from './styles'

const LoginPage = (): JSX.Element => {

	const [token, setToken] = useState('')
	const creteButtonAlert = () =>
		Alert.alert(
			'Token Inválido',
			'Você digitou um token inválido, tente novamente',
			[
				{ text: 'OK' }
			],
			{ cancelable: false }
		)
	
	// NzE1NjgyMDcxOTQyNTI5MTM0.XuW_-w.UGFoK5PZ38PADlRy3qyrNGJk_1Q
	
	const sendToken = async () =>{
		const response = await fetch('https://192.168.0.7:3000/discord',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: 'loginWithToken',
					token: token
				})
			})
			
		const { result } =  await response.json()
		if(result === 'Token Inválido'){
			creteButtonAlert()
		}else{
			Alert.alert(
				'Token Válido',
				'Teste feito com sucesso',
				[
					{ text: 'OK' }
				],
				{ cancelable: false }
			)
		}

	}

	

	return (
		<View style={css.container}>
      
			<Image style={css.logo} source={require('../../../asserts/logo.png')}/>
			<TextInput 
				style={css.txtInput} 
				placeholder='Token'
				onChangeText={(text)=>setToken(text)}
			/>
			<View style={css.containerTouchable}>
				<TouchableOpacity style={css.touchableButton} onPress={sendToken}>
					<Text style={css.touchableText}>Entrar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={css.touchableNotToken} >
					<Text style={css.touchableNotText}>Onde conseguir um token?</Text>
				</TouchableOpacity>  
			</View>
			
			
			
		</View>

      
	)
}

export default LoginPage