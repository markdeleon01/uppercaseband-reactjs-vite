import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('With React Testing Library', () => {
    const initialState = { members: [] }
	const mockStore = configureStore()
	let store

	test('renders About', () => {
		store = mockStore(initialState)
		render(
			<Provider store={store}>
				<About />
			</Provider>
		)

		// assert main page header
		expect(screen.getByTestId('about-header-1')).toBeDefined();

		// assert secondary page header
		expect(screen.getByTestId('about-header-2')).toBeDefined();

		// assert page components
		expect(screen.getByTestId('about')).toBeDefined();
		expect(screen.getByTestId('band-pic')).toBeDefined();
		expect(screen.getByTestId('biography')).toBeDefined();
	})
})
