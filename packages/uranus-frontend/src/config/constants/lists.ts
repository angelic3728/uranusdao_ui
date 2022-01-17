const TAN_EXTENDED = 'https://uranus.finance/tan-extended.json'
const TAN_TOP100 = 'https://uranus.finance/tan-top-100.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  // TAN_TOP100,
  // TAN_EXTENDED,
  // ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
