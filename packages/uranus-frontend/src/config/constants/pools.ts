import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'


const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.tan,
    earningToken: serializedTokens.tan,
    contractAddress: {
      25: process.env.REACT_APP_CRAFTSMAN_ADDRESS_MAINNET,
      338: process.env.REACT_APP_CRAFTSMAN_ADDRESS_TESTNET, // FIXME: env var master chef
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: process.env.REACT_APP_TOKEN_PER_BLOCK, // FIXME pool tokenPerBlock
    sortOrder: 1,
    isFinished: false,
  }
]

export default pools
