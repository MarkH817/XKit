import { Extension } from './extension'

class Example extends Extension {
  getInfo () {
    return {
      name: 'Example',
      version: '1.0.0',
      description: 'Example extension',
      developer: 'Jest'
    }
  }

  init () {
    this.addCss()
    this.addCss('* { color: red; }')
  }

  run () {
    this.addCss('a { font-size: 2em; }')
  }

  destroy () {
    this.removeCss()
  }
}

describe('Base Extension class', () => {
  test('should fail if getInfo() not overridden', () => {
    expect(() => {
      const basic = new Extension()

      basic.getInfo()
    }).toThrow()

    expect(() => {
      const basic = new Extension()

      // Note: this method should only called within
      // the `run` or `init` methods
      basic.addCss(`body { font-size: 2em; }`)
    }).toThrow()

    expect(() => {
      const basic = new Extension()

      // Note: this method should only called within
      // the `run` or `destroy` methods
      basic.removeCss()
    }).toThrow()
  })

  test('should fail if `run()` is not overridden', () => {
    expect(() => {
      const basic = new Extension()

      basic.run()
    }).toThrow()
  })
})

describe('Implemented Extension subclass', () => {
  test('Example extension lifecycle', () => {
    const example = new Example()
    example.init()
    example.run()
    example.destroy()
  })
})
