/**
 * Base class to hold lifecycle methods for each Extension.
 */
export class Extension {
  constructor () {
    this.init()

    this.run()
  }

  init () {
    // noop
  }

  run () {
    throw Error('Must implement `run()` method')
  }

  destroy () {
    // noop
  }
}

Extension.defaultInfo = {
  name: 'Extension Name',
  version: '0.0.0',
  shortDescription: '',
  description: ''
}
