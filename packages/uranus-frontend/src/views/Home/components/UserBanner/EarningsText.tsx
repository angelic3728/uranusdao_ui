import { ContextApi } from 'contexts/Localization/types'
import BigNumber from 'bignumber.js'

export const getEarningsText = (
  numFarmsToCollect: number,
  hastanPoolToCollect: boolean,
  earningsUsdc: BigNumber,
  t: ContextApi['t'],
): string => {
  const data = {
    earningsUsdc: earningsUsdc.toString(),
    count: numFarmsToCollect,
  }

  let earningsText = t('%earningsUsdc% to collect', data)

  if (numFarmsToCollect > 0 && hastanPoolToCollect) {
    if (numFarmsToCollect > 1) {
      earningsText = t('%earningsUsdc% to collect from %count% farms and TAN mine', data)
    } else {
      earningsText = t('%earningsUsdc% to collect from %count% farm and TAN mine', data)
    }
  } else if (numFarmsToCollect > 0) {
    if (numFarmsToCollect > 1) {
      earningsText = t('%earningsUsdc% to collect from %count% farms', data)
    } else {
      earningsText = t('%earningsUsdc% to collect from %count% farm', data)
    }
  } else if (hastanPoolToCollect) {
    earningsText = t('%earningsUsdc% to collect from TAN mine', data)
  }

  return earningsText
}
