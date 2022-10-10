import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../../types/UserSchema'

const initialState: UserSchema = {}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  }
})

// Action creators are generated for each case reducer function
export const { actions: UserActions } = UserSlice
export const { reducer: UserReducer } = UserSlice
