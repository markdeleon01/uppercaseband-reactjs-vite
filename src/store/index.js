import { configureStore } from '@reduxjs/toolkit'
import membersReducer from './members'
import discographyReducer from './discography'
import eventsReducer from './events'

// only one store!
const store = configureStore({
	// map of reducers; Redux will merge all reducers defined here into one reducer
	reducer: {
		members: membersReducer,
		discography: discographyReducer,
		events: eventsReducer
	}
})

export default store
