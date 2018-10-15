import { XKit } from './xkit'
import { Manager } from './manager'

jest.mock('./manager')

describe('Neon XKit', () => {
  beforeEach(() => {
    // @ts-ignore
    Manager.mockClear()
  })

  test('XKit lifecycle', () => {
    const xkit = new XKit()
    xkit.init()
    xkit.run()
    xkit.shutdown()

    expect(Manager).toBeCalled()
  })
})
