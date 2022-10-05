import { getCounterValue } from './getCounterValue'
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getCounterValue.test', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 12 }

    }
    expect(getCounterValue(state as StateSchema)).toEqual(12)
  })
})
