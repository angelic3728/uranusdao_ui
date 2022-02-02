import BigNumber from 'bignumber.js'
import { BLOCKS_PER_MONTH, COE_SUPPLY_VARING } from 'config'
import { getSupply, callUpdateOncePerDay } from 'utils/supply'
import lpAprs from 'config/constants/lpAprs.json'

/**
 * Get the APR value in %
 * @param stakingTokenPrice Token price in the same quote currency
 * @param rewardTokenPrice Token price in the same quote currency
 * @param totalStaked Total amount of stakingToken in the pool
 * @param tokenPerBlock Amount of new TAN allocated to the pool for each new block
 * @returns Null if the APR is NaN or infinite.
 */
export const getPoolApr = (
  stakingTokenPrice: number,
  rewardTokenPrice: number,
  totalStaked: number,
  tokenPerBlock: number,
): number => {
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(BLOCKS_PER_MONTH).times(COE_SUPPLY_VARING)
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)
  // const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(1000000000) // XXX debug hard code for APR
  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber()
}

/**
 * Get farm APR value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param tanPriceUsd TAN price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @param farmAddress Farm Address
 * @returns Farm Apr
 */
export const getFarmApr = (
  poolWeight: BigNumber,
  tanPriceUsd: BigNumber,
  poolLiquidityUsd: BigNumber,
  farmAddress: string,
): { tanRewardsApr: number; lpRewardsApr: number } => {
  const SUPPLY_PER_MONTH = Number(getSupply())
  callUpdateOncePerDay()
  const yearlyTanRewardAllocation = poolWeight ? poolWeight.times(SUPPLY_PER_MONTH * COE_SUPPLY_VARING) : new BigNumber(NaN)
  const tanRewardsApr = yearlyTanRewardAllocation.times(tanPriceUsd).div(poolLiquidityUsd).times(100)
  let tanRewardsAprAsNumber = null
  if (!tanRewardsApr.isNaN() && tanRewardsApr.isFinite()) {
    tanRewardsAprAsNumber = tanRewardsApr.toNumber()
  }
  const lpRewardsApr = lpAprs[farmAddress?.toLocaleLowerCase()] ?? 0
  return { tanRewardsApr: tanRewardsAprAsNumber, lpRewardsApr }
}

export default null
