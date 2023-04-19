import { createAction } from '@reduxjs/toolkit'
import { LocationContent } from './types'

export const setSelect = createAction<LocationContent | undefined>("SET_SELECT")

export const setPanorama = createAction<string>("SET_PANORAMA")

export const setHotspot = createAction<[]>("SET_HOTSPOT")

export const toggleMap = createAction<boolean>("TOGGLE_MAP")