import { addCss, removeCss } from './style'

describe('style module', () => {
  beforeEach(() => {
    removeCss('test')
  })

  test('add no CSS', () => {
    expect(addCss('test', '')).toBeFalsy()
  })

  test('add CSS', () => {
    expect(addCss('test', `* { font-size: 2em; }`)).toBeTruthy()
  })

  test('remove non-existant CSS', () => {
    expect(removeCss('test')).toBeFalsy()
  })
})
