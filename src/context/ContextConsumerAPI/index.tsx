import {  createContext } from 'react'


interface Body {
	title: string
	id: string
	[key:string]: string
}

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

const ExpressDiscord = createContext({
	expressDiscord
})

export default ExpressDiscord
