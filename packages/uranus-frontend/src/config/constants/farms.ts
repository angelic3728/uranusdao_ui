import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()
// FIXME update pid, address and tokens for LP
const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'TAN',
    lpAddresses: {
      338: '0x523E5f7C31f05E32560C329E2Ea95DB9A17f8A20',
      25: '0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03',
    },
    token: serializedTokens.workbench,
    quoteToken: serializedTokens.wcro,
  },
  // {
  //   pid: 251,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     338: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
  //     25: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.wbnb,
  // },
  // {
  //   pid: 252,
  //   lpSymbol: 'BUSD-BNB LP',
  //   lpAddresses: {
  //     338: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
  //     25: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //   },
  //   token: serializedTokens.busd,
  //   quoteToken: serializedTokens.wbnb,
  // },
  {
    pid: 1,
    lpSymbol: 'TAN-CRO LP',
    lpAddresses: {
      338: '0x26d3ADf85ED1C95C7439BF6B7390F95BfC51995A',
      25: '0xA111C17f8B8303280d3EB01BBcd61000AA7F39F9',
    },
    token: serializedTokens.tan,
    quoteToken: serializedTokens.wcro,
  },
  {
    pid: 2,
    lpSymbol: 'TAN-ETH LP',
    lpAddresses: {
      338: '0xBFE430bc392392349c6241CB2f2E10c9677DAAE8',
      25: '0x8F09fFf247B8fDB80461E5Cf5E82dD1aE2EBd6d7',
    },
    token: serializedTokens.tan,
    quoteToken: serializedTokens.eth,
  },    
  {
    pid: 3,
    lpSymbol: 'TAN-WBTC LP',
    lpAddresses: {
      338: '0x876E182f2B03F881586D0654F0f1befa50602452',
      25: '0xe61Db569E231B3f5530168Aa2C9D50246525b6d6',
    },
    token: serializedTokens.tan,
    quoteToken: serializedTokens.wbtc,
  },
  {
    pid: 5,
    lpSymbol: 'CRO-ETH LP',
    lpAddresses: {
      338: '0xb3A8517743e9A084BAfC815Eb5e479a98fcA0183',
      25: '0x814920d1b8007207db6cb5a2dd92bf0b082bdba1',
    },
    token: serializedTokens.wcro,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 7,
    lpSymbol: 'CRO-USDC LP',
    lpAddresses: {
      338: '0x991f4BC2A18e8A08e50bB5aAdB55571F4a01a6f6',
      25: '0x814920d1b8007207db6cb5a2dd92bf0b082bdba1',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.wcro,
  },
  {
    pid: 8,
    lpSymbol: 'TAN-USDC LP',
    lpAddresses: {
      338: '0x95181325915978274aaE794d3d13162266f3cB7D',
      25: '0xbf62c67eA509E86F07c8c69d0286C0636C50270b',
    },
    token: serializedTokens.tan,
    quoteToken: serializedTokens.usdc,
  },
]

export default farms
