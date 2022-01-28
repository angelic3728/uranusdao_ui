import BigNumber from 'bignumber.js'
import { getTanContract } from 'utils/contractHelpers'
import { BLOCKS_PER_YEAR, BLOCKS_PER_MONTH, COE_SUPPLY_VARING } from 'config'

export const supplyTAN = async (): Promise<number> => {
  const tanContract = getTanContract()
  const supply = await tanContract.SupplyPerEpoch()
  const supplyBigNumber = new BigNumber(supply.toString())
  const supplyDecimalRemoved = supplyBigNumber.div(1000000000000000000)

  const tanPerMonth = supplyDecimalRemoved.toNumber()
  const tanPerBlock = tanPerMonth / BLOCKS_PER_MONTH

  return tanPerBlock
}

// export const supplyTAN = (): number => {
//   return Number(process.env.REACT_APP_TAN_PER_BLOCK)
// }
