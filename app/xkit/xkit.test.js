import { Bubblr } from '../extensions'
import { XKit } from './xkit'

jest.mock('../extensions')

describe('Neon XKit', () => {
  test('XKit lifecycle', () => {
    const xkit = new XKit()
    xkit.init()
    xkit.shutdown()

    expect(Bubblr).toHaveBeenCalled()
  })
})
