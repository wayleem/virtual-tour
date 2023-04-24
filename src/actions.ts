import { createAction } from '@reduxjs/toolkit'
import { LocationContent, Hotspot, Config } from './types'

export const setSelect = createAction<LocationContent>("SET_SELECT")

export const setPanorama = createAction<Config>("SET_PANORAMA")

export const setHotspot = createAction<Hotspot[]>("SET_HOTSPOT")

export const toggleMap = createAction<boolean>("TOGGLE_MAP")

export const setTrailMap = createAction<any>("SET_TRAILMAP")