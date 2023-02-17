import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileData.test', () => {
  test('should return error', () => {
    const data = {
      currency: Currency.RUB,
      country: Country.Russia,
      first: 'Alex',
      lastname: 'Firsov',
      age: 37,
      city: 'Moscow',
      username: 'GM'

    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
