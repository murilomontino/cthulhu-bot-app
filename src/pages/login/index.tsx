import React from 'react'
import { 
	View, 
	Image, 
	TouchableOpacity, 
	Text, 
	KeyboardAvoidingView,
	TextInput,
	
} from 'react-native'
import css from './styles'
import Icon from 'react-native-vector-icons/Entypo'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useAuthentication} from '../../context/ContextAuthentication'


const LoginPage = (): JSX.Element => {

	const {sendToken} = useAuthentication()
	let token = ''
	const logStorage = async ()=>{
		const value = await AsyncStorage.getItem('@idBot')
		console.log(value)
	}
	console.log('render')
	// _getText()
	return (
	
		<View style={{
			flex: 1,
		}}>
			
			<KeyboardAvoidingView style={css.containerKeyboard}>
				<View style={css.viewKeyboard}>
					<Image style={css.logo} source={require('../../../asserts/logo.png')}/>
					<TextInput 
						style={css.txtInput} 
						placeholder='Token'
						onChangeText={ text => token = text	}
					/>
					<TouchableOpacity onPress={()=> sendToken(token)}>
						<Icon style={css.icon}name="chevron-right" size={40} color="black" />
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
			
		
			
			<View style={{
				flex: 1
			}}>
				<TouchableOpacity style={css.containerTouchable} onPress={logStorage}>
					<Text style={css.touchableText}>Onde conseguir um token?</Text>
				</TouchableOpacity>  
			</View>
			
			
			
		</View>

      
	)
}

export default LoginPage