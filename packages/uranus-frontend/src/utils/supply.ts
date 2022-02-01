import BigNumber from 'bignumber.js'
import { getTanContract } from 'utils/contractHelpers'
import { BLOCKS_PER_YEAR, BLOCKS_PER_MONTH, COE_SUPPLY_VARING } from 'config'

const MILISECONDS_PER_CALL_EPOCH = 60 * 60 * 24 * 1000 // 2,592,000,000 miliseconds per one day.
let supply = "0"
let isAfterOneDay = true

export const getSupply = (): string => {
  return supply
}

export const getSupplyPerBlock = (): string => {
  const supplyPerBlock = String(Number(supply) / Number(BLOCKS_PER_MONTH))
  return supplyPerBlock
}

const setSupply = (sup: string) => {
  supply = sup
}

const updateSupply = async () => {
  const TanContract = getTanContract()
  const SupplyPerEpoch = await TanContract.SupplyPerEpoch()
  const SupplyBigNumber = new BigNumber(SupplyPerEpoch.toString())
  const SupplyDecimalRemoved = SupplyBigNumber.div(1000000000000000000)

  setSupply(SupplyDecimalRemoved.toString())
  // const SupplyPerBlock = SupplyDecimalRemoved.div(BLOCKS_PER_MONTH)
  // setSupply(SupplyPerBlock.toString())
  // setSupply(String(Number(supply) + 1)) // for test
}

const countTimeForEpoch = async () => {
  await new Promise((resolve, reject) => setTimeout(resolve, MILISECONDS_PER_CALL_EPOCH));
  isAfterOneDay = true
}

export const callUpdateOncePerDay = () => {
  if (supply === "0" || isAfterOneDay === true) {
    isAfterOneDay = false
    updateSupply()
    countTimeForEpoch()
  }
}
