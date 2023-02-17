import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'hello warn'
      }
    }
    expect(getProfileError(state as StateSchema)).toEqual('hello warn')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
