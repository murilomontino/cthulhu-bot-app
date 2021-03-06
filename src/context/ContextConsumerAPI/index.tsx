import React, {  createContext, useContext } from 'react'

const ContextConsume = createContext(null)

interface Props {
	children: JSX.Element
} 

interface Body {
	title: string
	id: string
	[key:string]: string
}

const ContextAPIProvider = ({children}:Props): JSX.Element => {

	const expressDiscord = async (body:Body) =>{
		const rep = await fetch('http://192.168.0.7:3000/discord',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: body.title,
					id: body.id,
					...body
				})
			})

		return await rep.json()
	}

	return (
		<ContextConsume.Provider value={
			expressDiscord
		}>
			{children}
		</ContextConsume.Provider>
	)
}

interface context{
	expressDiscord: (body:Body) => Promise<void>
}

export const useConsumeAPI = ():context =>{
	const { expressDiscord }: context = useContext(ContextConsume)

	return {
		expressDiscord
	}
} 

export default ContextAPIProvider