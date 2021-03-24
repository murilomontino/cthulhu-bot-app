import React from 'react'
import Login from './pages/Login'
import Navigation from './components/Navigation'
import { useAuthentication } from './context/ContextAuthentication'

const Authentication = (): JSX.Element => {
	
	const {isPrivate} = useAuthentication()


	return (
		<>
			{!isPrivate && <Login /> }
			{isPrivate && <Navigation/> }
		</>
	)
}

export default  Authentication

