export const parseVersion = (versionString = '') => {
  const defaultVersion = { major: 0, minor: 0, patch: 0 }

  if (versionString.trim() === '') {
    return defaultVersion
  }

  const versionParts = versionString.split('.')

  if (versionParts.length === 3) {
    return {
      major: Number.parseInt(versionParts[0]),
      minor: Number.parseInt(versionParts[1]),
      patch: Number.parseInt(versionParts[2])
    }
  } else {
    return defaultVersion
  }
}
