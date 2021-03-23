import React from 'react'
import renderer, { ReactTestRendererTree } from 'react-test-renderer'

import App from '../src/App'

describe('<App />', () => {
	it('has 2 child', () => {
		const tree = renderer.create(<App />).toTree()
		expect(tree?.children?.length).toBe(1)
		
	})
})