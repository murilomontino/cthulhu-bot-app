import React from 'react'
import Login from './pages/login'
import Home from './pages/home'
import { useAuthentication } from './context/ContextAuthentication'
import ContextConsumerAPI from './context/ContextConsumerAPI'

const Navigation = (): JSX.Element => {
	
	const {isPrivate} = useAuthentication()

	return (
		<>
			{!isPrivate && <Login /> }
			<ContextConsumerAPI>
				{isPrivate && <Home/> }
			</ContextConsumerAPI>
		</>
	)
}

export default  Navigation

