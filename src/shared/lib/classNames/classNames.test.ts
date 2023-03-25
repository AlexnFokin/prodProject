import { classNames } from '@/shared/lib/classNames/classNames'

describe('classNames', () => {
  test('only first param', () => {
    expect(classNames('someClass'))
      .toBe('someClass')
  })
  test('only second param', () => {
    expect(classNames('someClass', { disabled: true, hovered: false }))
      .toBe('someClass disabled')
  })
  test('only second param with underfined', () => {
    expect(classNames(
      'someClass',
      { disabled: true, hovered: false, scrollable: undefined }
    )).toBe('someClass disabled')
  })
  test('only third param', () => {
    expect(classNames('someClass', {}, ['classOne', 'classTwo']
    )).toBe('someClass classOne classTwo')
  })
  test('all param', () => {
    expect(classNames(
      'someClass',
      { hovered: true, seconded: true, disabled: false },
      ['classOne', 'classTwo']
    )).toBe('someClass classOne classTwo hovered seconded')
  })
})
