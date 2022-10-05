import { counterActions, counterReducer } from './CounterSlice'
import { CounterSchema } from '../types/counterSchema'

describe('CounterSlice.test', () => {
  const state: CounterSchema = {
    value: 12
  }
  test('increment', () => {
    expect(counterReducer(state, counterActions.increment)).toEqual({ value: 13 })
  })
  test('decriment', () => {
    expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 11 })
  })
  test('should working with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 })
  })
})
