import 'react-native'

import React from 'react'
import {cleanup, render} from '@testing-library/react-native'

import Login from '../src/pages/Login'

import MockedAsyncStorage from '../__mocks__/@react-native-async-storage/async-storage'



afterEach(()=>{
	jest.mock('@react-native-async-storage/async-storage', () => MockedAsyncStorage)

})

describe('<App />', () => {
	
	it('renders correctly', () => {
		const {toJSON} = render(<Login.prototype/>)
		expect(toJSON()).toMatchSnapshot()
	})
})