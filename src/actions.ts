import { createAction } from '@reduxjs/toolkit'
import { LocationContent, Hotspot, Config } from './types'

export const setSelect = createAction<LocationContent | undefined>("SET_SELECT")

export const setPanorama = createAction<Config>("SET_PANORAMA")

export const toggleMap = createAction<boolean>("TOGGLE_MAP")