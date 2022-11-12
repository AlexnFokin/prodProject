import { updateProfileData } from './updateProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from 'entities/Profile'

const data = {
  currency: Currency.RUB,
  country: Country.Russia,
  first: 'Alex',
  lastname: 'Firsov',
  age: 37,
  city: 'Moscow',
  username: 'GM'
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      // @ts-expect-error
      profile: {
        form: data
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })
  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      // @ts-expect-error
      profile: {
        form: data
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()
    expect(result.meta.requestStatus).toEqual('rejected')
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR
    ])
  })
  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      // @ts-expect-error
      profile: {
        form: { ...data, first: '', lastname: '' }
      }
    })

    const result = await thunk.callThunk()
    expect(result.meta.requestStatus).toEqual('rejected')
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })
})
