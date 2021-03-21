import React, {
	useState,
	createContext,
	useContext,
	useEffect,
	Dispatch,
	ReactNode,
	SetStateAction,
	
} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert, Platform } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'


type propsProvider = {
	isPrivate: boolean,
	sendToken: (token: string) => Promise<void>
	setIsPrivate: Dispatch<React.SetStateAction<boolean>>
} | undefined

const ContextAuth = createContext<propsProvider>(undefined)


interface Props {
	children: ReactNode
}

const ContextAuthProvider = ({children}:Props):JSX.Element => {

	
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
			value={
				{
					sendToken,
					isPrivate,
					setIsPrivate
				}
			}
		>
			<Spinner
				visible={isLoading}
				size='large'
				textContent={'Logando...'}
			/>
			{children}
		</ContextAuth.Provider>
	)
}

interface context {
	isPrivate: boolean | undefined,
	sendToken: ((token: string) => Promise<void>)| undefined
	setIsPrivate: (Dispatch<SetStateAction<boolean>>) | undefined
}

export const useAuthentication = (): context => {
	
	const context = useContext(ContextAuth)
	
	const isPrivate = context?.isPrivate
	const sendToken = context?.sendToken
	const setIsPrivate = context?.setIsPrivate
	
	return {
		isPrivate,
		sendToken,
		setIsPrivate
	}
}

export default ContextAuthProvider
