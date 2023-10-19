import { defineConfig } from 'cypress'

export default defineConfig({
	env: {
		codeCoverage: {
			include: 'cypress/**/*.*'
		}
	},
	e2e: {
		baseUrl: 'http://localhost:3000'
	},

	component: {
		devServer: {
			framework: 'react',
			bundler: 'vite'
		}
	}
})
