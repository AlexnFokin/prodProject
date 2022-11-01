import axios from 'axios'
import { loginByUsername } from './LoginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
  test('success login', async () => {
    const userValue = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: 'admin', password: 'admin' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
  })
  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: 'admin', password: 'admin' })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })

  // test('success login', async () => {
  //   const userValue = { username: '123', id: '1' }
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
  //   const action = loginByUsername({ username: 'admin', password: 'admin' })
  //   const result = await action(dispath, getState, undefined)
  //
  //   expect(dispath).toHaveBeenCalledTimes(3)
  //   expect(dispath).toHaveBeenCalledWith(userActions.setAuthData(userValue))
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  //   expect(result.payload).toEqual(userValue)
  // })
  // test('error login', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //   const action = loginByUsername({ username: 'admin', password: 'admin' })
  //   const result = await action(dispath, getState, undefined)
  //
  //   expect(dispath).toHaveBeenCalledTimes(2)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('rejected')
  //   expect(result.payload).toEqual('error')
  // })
})
