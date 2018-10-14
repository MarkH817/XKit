/**
 * Get id safe string
 *
 * @param {string} extensionName
 * @returns {string}
 */
const getStyleId = extensionName =>
  `xkit-css--extension-${extensionName.replace(' ', '-')}`

/**
 * @param {string} extensionName
 * @returns {HTMLStyleElement}
 */
const initCss = extensionName => {
  const extensionStyleId = getStyleId(extensionName)

  /** @type {HTMLStyleElement} */
  let styleDom = document.querySelector(`#${extensionStyleId}`)

  if (styleDom === null) {
    styleDom = document.createElement('style')
    styleDom.id = extensionStyleId

    document.head.appendChild(styleDom)
  }

  return styleDom
}

/**
 * Add CSS for under an extension
 *
 * @param {string} extensionName
 * @param {string} css
 */
export const addCss = (extensionName, css) => {
  if (css.length === 0) {
    return false
  }

  const styleElement = initCss(extensionName)

  styleElement.append(css)

  return true
}

/**
 * Remove CSS for under an extension
 *
 * @param {string} extensionName
 */
export const removeCss = extensionName => {
  const styleElement = document.getElementById(getStyleId(extensionName))

  if (styleElement !== null) {
    document.head.removeChild(styleElement)
    return true
  } else {
    return false
  }
}
