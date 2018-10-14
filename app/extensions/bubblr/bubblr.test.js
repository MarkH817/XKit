jest.mock('../../xkit/extension')

import { Bubblr } from './bubblr'
import { Extension } from '../../xkit/extension'

describe('Bubblr Extension', () => {
  beforeEach(() => {
    // @ts-ignore
    Extension.mockClear()
  })

  test('Expected lifecycle', () => {
    const bubble = new Bubblr()
    bubble.init()
    bubble.run()
    bubble.destroy()

    expect(Extension).toHaveBeenCalledTimes(1)

    // @ts-ignore
    const mockExt = Extension.mock.instances[0]

    expect(mockExt.addCss).toHaveBeenCalledTimes(1)
    expect(mockExt.removeCss).toHaveBeenCalledTimes(1)
  })
})
