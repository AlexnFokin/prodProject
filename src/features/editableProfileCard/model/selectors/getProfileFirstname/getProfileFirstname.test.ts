import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileFirstname } from './getProfileFirstname'

describe('getProfileFirstname.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          first: 'alex'
        }
      }
    }
    expect(getProfileFirstname(state as StateSchema)).toEqual('alex')
  })
})
