import BigNumber from 'bignumber.js'
import { convertSharesToTan } from 'views/Pools/helpers'
import { multicallv2 } from 'utils/multicall'
import tanVaultAbi from 'config/abi/tanVault.json'
import { getTanVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'

export const fetchPublicVaultData = async () => {
  try {
    const calls = [
      'getPricePerFullShare',
      'totalShares',
      'calculateHarvestTANRewards',
      'calculateTotalPendingTANRewards',
    ].map((method) => ({
      address: getTanVaultAddress(),
      name: method,
    }))

    const [[sharePrice], [shares], [estimatedTanBountyReward], [totalPendingTanHarvest]] = await multicallv2(
      tanVaultAbi,
      calls,
    )

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    const totalTanInVaultEstimate = convertSharesToTan(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalTanInVault: totalTanInVaultEstimate.tanAsBigNumber.toJSON(),
      estimatedTanBountyReward: new BigNumber(estimatedTanBountyReward.toString()).toJSON(),
      totalPendingTanHarvest: new BigNumber(totalPendingTanHarvest.toString()).toJSON(),
    }

  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalTanInVault: null,
      estimatedTanBountyReward: null,
      totalPendingTanHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const calls = ['performanceFee', 'callFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: getTanVaultAddress(),
      name: method,
    }))

    const [[performanceFee], [callFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicallv2(tanVaultAbi, calls)

    return {
      performanceFee: performanceFee.toNumber(),
      callFee: callFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
