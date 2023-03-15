import { configureStore, createReducer } from '@reduxjs/toolkit'
import { PreviewState } from './types'
import * as action from './actions'

const INITIAL_STATE: PreviewState = {
    select: undefined
}

const storeReducer = createReducer(INITIAL_STATE, (builder) => {
    builder
        .addCase(action.setSelect, (state, action) => {
            state.select = action.payload
        })
})

export const store = configureStore({
    reducer: storeReducer,
})