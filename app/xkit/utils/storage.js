export const MAX_EXTENSION_STORAGE_SIZE = 51200

export const extensionSize = id => 0

export const extensionQuota = id =>
  MAX_EXTENSION_STORAGE_SIZE - extensionSize(id)

export const getExtensionData = (id, key, defaultValue) => ({})

export const setExtensionData = (id, key, value) => true

export const deleteExtensionData = id => true
