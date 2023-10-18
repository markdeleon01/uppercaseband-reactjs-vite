import { createSlice } from '@reduxjs/toolkit'

const eventsSlice = createSlice({
	name: 'events',
	initialState: { events: [] },
	reducers: { // actions
        setEvents(state, action) {
            state.events = action.payload
        }
    }
})

export default eventsSlice.reducer

export const eventsActions = eventsSlice.actions
