import { configureStore, createReducer, combineReducers } from '@reduxjs/toolkit'
import { PreviewState, VirtualTourState } from './types'
import { start } from './data'
import * as action from './actions'

const INITIAL_PREVIEW: PreviewState = {
    select: undefined
}

const INITIAL_VIRTUAL_TOUR: VirtualTourState = {
    mapActive: false,
    panoramaURL: start.panoramaURL,
    hotspots: start.hotspots
}

const previewReducer = createReducer(INITIAL_PREVIEW, (builder) => {
    builder
        .addCase(action.setSelect, (state, action) => {
            state.select = action.payload
        })
})

const virtualTourReducer = createReducer(INITIAL_VIRTUAL_TOUR, (builder) => {
    builder
        .addCase(action.setPanorama, (state, action) => {
            state.panoramaURL = action.payload
        })
        .addCase(action.toggleMap, (state, action) => {
            state.mapActive = action.payload
        })
        .addCase(action.setHotspot, (state, action) => {
            state.hotspots = action.payload
        })
})



const storeReducer = combineReducers({ previewReducer, virtualTourReducer })

export const store = configureStore({
    reducer: storeReducer,
})