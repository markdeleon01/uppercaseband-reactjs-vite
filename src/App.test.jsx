import { describe, test, expect } from 'vitest'
import {render, screen} from '@testing-library/react'
import App from './App'

describe('App test', () => {
	test('should render', () => {
        render(<App />)

        const appDivElement = screen.getByTestId('app')
        expect(appDivElement).toBeDefined()
    })
})
