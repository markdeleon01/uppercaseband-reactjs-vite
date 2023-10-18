
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Discography from './Discography'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('With React Testing Library', () => {
	const initialState = { discography: { releases: [] } }
	const mockStore = configureStore()
	let store

	test('renders Discography', () => {
		store = mockStore(initialState)
		render(
			<Provider store={store}>
				<Discography />
			</Provider>
		)

		// assert main page header
		expect(screen.getByTestId('discography-header-1')).toBeDefined();

		// assert secondary page header
		expect(screen.getByTestId('discography-header-2')).toBeDefined();

		// assert page components
		expect(screen.getByTestId('discography')).toBeDefined();
	})
})
