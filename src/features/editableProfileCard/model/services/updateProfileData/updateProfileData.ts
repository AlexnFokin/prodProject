import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { Profile } from '@/entities/Profile'
import { ValidateProfileError } from '@/features/editableProfileCard'

export const updateProfileData = createAsyncThunk<
Profile,
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
void,
ThunkConfig<ValidateProfileError[]>
>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const formData = getProfileForm(getState())

    const errors = validateProfileData(formData)

    if ((errors != null) && (errors.length > 0)) {
      return rejectWithValue(errors)
    }

    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  }
)
