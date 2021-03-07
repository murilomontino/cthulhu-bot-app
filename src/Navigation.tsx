import React from 'react'
import Login from './pages/login'
import Home from './pages/home'
import { useAuthentication } from './context/ContextAuthentication'

const Navigation = (): JSX.Element => {
	
	const {isPrivate} = useAuthentication()

	return (
		<>
			{!isPrivate && <Login /> }
			{isPrivate && <Home/> }
		</>
	)
}

export default  Navigation

