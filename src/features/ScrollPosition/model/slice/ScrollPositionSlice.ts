import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ScrollPositionSchema } from 'features/ScrollPosition'

const initialState: ScrollPositionSchema = {
  scroll: {}
}

export const ScrollPositionSlice = createSlice({
  name: 'ScrollPosition',
  initialState,

  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[payload.path] = payload.position
    }
  }

})

// Action creators are generated for each case reducer function
export const { actions: ScrollPositionAction } = ScrollPositionSlice
export const { reducer: ScrollPositionReducer } = ScrollPositionSlice
