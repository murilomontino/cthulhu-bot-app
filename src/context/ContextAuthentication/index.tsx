import React, {
	useState,
	createContext,
	useContext,
	useEffect,
	Dispatch,
	
} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert, Platform } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

interface AuthContext {
	isPrivate: boolean,
	sendToken: (token: string) => Promise<void>
	setIsPrivate: Dispatch<React.SetStateAction<boolean>>
}

const ContextAuth = createContext<AuthContext|null>(null)

interface Props {
	children: JSX.Element
} 

const ContextAuthProvider = (props:Props):JSX.Element => {

	const [isPrivate, setIsPrivate] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	
	useEffect(() => {
		const isAuthenticate = async () =>{
			try {
				const value = await AsyncStorage.getItem('@isPrivate')
				if (value === null || value === 'false') {
					setIsPrivate(false)
					if(value === null){
						AsyncStorage.setItem('@isPrivate', 'false')
					}
					
				}
				else{
					setIsPrivate(true)
				}
			} catch (error) {
				// Error retrieving data
			}
		}
		isAuthenticate()
	}

	, [])


	const creteButtonAlert = () => 
		Alert.alert(
			'Token Inválido',
			'Você digitou um token inválido, tente novamente',
			[
				{ text: 'OK' }
			],
			{ cancelable: false })
				
		
	const sendToken = async (token:string) =>{
		setIsLoading(true)
		const response = await fetch('http://192.168.0.7:3000/loginWithToken',
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
			
		const { validate, id } =  await response.json()
		
		if(validate === 'Token Válido'){
			await AsyncStorage.setItem('@idBot', id)
			await AsyncStorage.setItem('@isPrivate', 'true')
			setTimeout(() => {
				setIsPrivate(true)
				setIsLoading(false)
			}, 1000)
			
			
		}else {
			console.log(Platform.Version) 
			
			setTimeout(() => {
				setIsLoading(false)
				if(Platform.OS === 'ios')
					setTimeout(() => {
						creteButtonAlert()
					}, 500)
				else{
					creteButtonAlert()
				}
			}, 500)

			
			
			
		}

	}

	
	return (
		<ContextAuth.Provider
			value={{
				sendToken,
				isPrivate,
				setIsPrivate
			}}
		>
			<Spinner
				visible={isLoading}
				size='large'
				textContent={'Logando...'}
			/>
			{props.children}
		</ContextAuth.Provider>
	)
}



export const useAuthentication = () => {
	const context = useContext(ContextAuth)
	const sendToken = context?.sendToken
	const isPrivate = context?.isPrivate
	const setIsPrivate = context?.setIsPrivate
	return {
		sendToken,
		isPrivate,
		setIsPrivate
	}
}

export default ContextAuthProvider
