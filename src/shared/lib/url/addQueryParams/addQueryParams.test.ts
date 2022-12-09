import { getQueryParams } from './addQueryParams'

describe('shared/url/AddQueryParams', () => {
  test('test with one param', () => {
    const params = getQueryParams({
      test: 'value'
    })
    expect(params).toBe('?test=value')
  })
  test('test with multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      second: 'opa'
    })
    expect(params).toBe('?test=value&second=opa')
  })
  test('test with undefined', () => {
    const params = getQueryParams({
      test: 'value',
      second: 'opa',
      third: undefined
    })
    expect(params).toBe('?test=value&second=opa')
  })
})
