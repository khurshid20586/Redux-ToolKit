import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            const newState = state.filter(itm => itm.id !== action.payload)
            return newState
        }
    }
})

export const { add, remove } = cartSlice.actions

export default cartSlice.reducer