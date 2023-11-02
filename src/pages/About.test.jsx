import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('With React Testing Library', () => {
	const initialState = {
		members: {
			members: [
				{
					name: 'Mark de Leon',
					role: 'vocals, guitars',
					'image-url': 'mark-deleon.png'
				},
				{
					name: 'Allan Lagat',
					role: 'bass',
					'image-url': 'allan-lagat.png'
				},
				{
					name: 'Joey Giagonia',
					role: 'lead guitars',
					'image-url': 'joey-giagonia.png'
				},
				{
					name: 'Kyle Saliva',
					role: 'drums',
					'image-url': 'kyle-saliva.png'
				}
			]
		}
	}

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
		expect(screen.getByTestId('about-header-1')).toBeDefined()

		// assert secondary page header
		expect(screen.getByTestId('about-header-2')).toBeDefined()

		// assert page components
		expect(screen.getByTestId('about')).toBeDefined()
		expect(screen.getByTestId('band-pic')).toBeDefined()
		expect(screen.getByTestId('biography')).toBeDefined()

		expect(screen.getAllByTestId('member-item')).toBeDefined()
		expect(screen.getAllByTestId('member-item')).toHaveLength(4)
	})
})
