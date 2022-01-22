import { ChainId } from 'uranus-swap-sdk'
import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'


BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})


// FIXME cronos explorer
export const BASE_EXPLORER_URLS = {
  [ChainId.MAINNET]: 'https://cronos.crypto.org/explorer',
  [ChainId.TESTNET]: 'https://cronos.crypto.org/explorer/testnet3',
}


export const CRONOS_BLOCK_TIME = 6 // FIXME block time
export const BLOCKS_PER_YEAR = (60 / CRONOS_BLOCK_TIME) * 60 * 24 * 365 // 5256000
export const BLOCKS_PER_MONTH = (60 / CRONOS_BLOCK_TIME) * 60 * 24 * 30 // 432000
export const COE_SUPPLY_VARING = (1 - 0.99**12) / (1 - 0.99) // coefficient to consider supply amount varing

export const BASE_URL = process.env.REACT_APP_BASE_URL // FIXME env var base URL
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 200000
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs'
