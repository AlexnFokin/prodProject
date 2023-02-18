import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FeaturesSchema } from '../types/featuresSchema'

const initialState: FeaturesSchema = {

}

export const featuresSlice = createSlice({
  name: 'features',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {

    }
  }
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
})

export const { actions: featuresActions } = featuresSlice
export const { reducer: featuresReducer } = featuresSlice
