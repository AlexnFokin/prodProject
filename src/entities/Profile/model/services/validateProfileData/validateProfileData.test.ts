import { validateProfileData } from './validateProfileData'
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

describe('validateProfileData.test', () => {
  test('valid data', async () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })
  test('without firstname & lastname', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' })

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: NaN })

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })
  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined })

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
  })
  test('some errors', async () => {
    const result = validateProfileData({ })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ]
    )
  })
})
