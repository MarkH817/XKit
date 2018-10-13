import { parseVersion } from './version'

describe('parseVersion()', () => {
  test('Give default version for no input', () => {
    expect(parseVersion()).toEqual({ major: 0, minor: 0, patch: 0 })
  })

  test('Give default version for invalid input', () => {
    expect(parseVersion('1.2.3.4.1')).toEqual({ major: 0, minor: 0, patch: 0 })
  })

  test('Parse 1.0.0', () => {
    expect(parseVersion('1.0.0')).toEqual({ major: 1, minor: 0, patch: 0 })
  })
})
