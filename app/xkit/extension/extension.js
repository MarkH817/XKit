import { style } from '../tools'

/**
 * Base class to hold lifecycle methods for each Extension.
 */
export class Extension {
  init () {
    // noop
  }

  /**
   * CSS to use when this extension is running
   *
   * @param {string} css
   */
  addCss (css = '') {
    const { name } = this.getInfo()

    style.addCss(name, css)
  }

  /**
   * Remove all CSS created by this extension
   */
  removeCss () {
    const { name } = this.getInfo()

    style.removeCss(name)
  }

  /**
   * Information about the extension
   *
   * @returns {ExtensionInfo}
   */
  getInfo () {
    throw Error(
      'Must implement `getInfo` method to return extension information'
    )
  }

  run () {
    throw Error('Must implement `run` method')
  }

  destroy () {
    // noop
  }
}

/** @type {ExtensionInfo} */
export const baseExtensionInfo = {
  name: 'Extension',
  version: '0.0.0',
  description: '',
  shortDescription: '',
  developer: 'anonymous',

  frame: false,
  beta: false,
  slow: false
}
