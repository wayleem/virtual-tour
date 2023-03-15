import { createAction } from '@reduxjs/toolkit'
import { LocationContent } from './types'

export const setSelect = createAction<LocationContent | undefined>("SET_SELECT")