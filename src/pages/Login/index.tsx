import React from 'react'
import { 
	View, 
	Image, 
	TouchableOpacity, 
	Text, 
	KeyboardAvoidingView,
	TextInput,
	Platform,
} from 'react-native'

import Icon from 'react-native-vector-icons/Entypo'
import { useAuthentication } from '../../context/ContextAuthentication'
import { useAssets } from 'expo-asset'
import AppLoading from 'expo-app-loading'

import css from './styles'


const LoginPage: React.FC = ()=> {

	const {sendToken, setIsPrivate} = useAuthentication()
	let token = ''
	const [assets] = useAssets([require('../../../asserts/logo.png')])


	const setTrueBot = () =>{
		if(setIsPrivate)
			setIsPrivate(true)
	}
	
	if (!assets) {
		return <AppLoading />
	}

	
	return (
	
		<View style={{
			flex: 1,
		}}>
			
			<KeyboardAvoidingView 
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={css.containerKeyboard}>
				<View style={css.viewKeyboard}>
					<Image style={css.logo} source={require('../../../asserts/logo.png')}/>
					<TextInput 
						style={css.txtInput} 
						placeholder='Token'
						onChangeText={ text => token = text	}
					/>
					<TouchableOpacity 
						style={css.touchableIcon} 
						onPress={()=> {
							if(sendToken)
								sendToken(token)
						}}
					>
						<Icon style={css.icon}name="chevron-right" size={40} color="black" />
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
			
		
			
			<View style={{
				flex: 1
			}}>
				<TouchableOpacity style={css.containerTouchable} onPress={setTrueBot}>
					<Text style={css.touchableText}>Onde conseguir um token?</Text>
				</TouchableOpacity>  
			</View>
			
			
			
		</View>

      
	)
}

export default LoginPage