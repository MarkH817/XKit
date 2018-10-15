import * as extensions from '../../extensions'
import { Extension } from '../extension'

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

/**
 * Returns an object with all of the information fields defined
 *
 * @param {ExtensionInfo} extensionInfo
 * @returns {ExtensionInfo}
 */
export const mergeInfo = extensionInfo => ({
  ...baseExtensionInfo,
  ...extensionInfo
})

export class Manager {
  constructor () {
    /**
     * @type {Map<string, Extension>}
     */
    this.extensionMap = new Map()
  }

  init () {
    Object.keys(extensions).forEach(extensionName => {
      /**
       * @type {Extension}
       */
      const extension = new extensions[extensionName]()

      if (!(extension instanceof Extension)) {
        return
      }

      try {
        const { name } = extension.getInfo()

        this.extensionMap.set(name, extension)
      } catch (err) {
        console.log('[Neon XKit] (Error)', extensionName, ':', err.message)
      }
    })
  }

  listExtensions () {
    return Array.from(this.extensionMap.values()).map(extension =>
      mergeInfo(extension.getInfo())
    )
  }

  destroy () {}
}
