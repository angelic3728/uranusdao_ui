import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceAmount } from 'utils/formatBalance'
import { farmsConfig } from 'config/constants'
import tokens, { serializeTokens } from 'config/constants/tokens'
import useRefresh from 'hooks/useRefresh'
import { getTokenPricesFromFarm } from 'state/pools/helpers'
import { deserializeToken } from 'state/user/hooks/helpers'
import { Token } from 'uranus-swap-sdk'
import { fetchFarmsPublicDataAsync, fetchFarmUserDataAsync, nonArchivedFarms } from '.'
import { State, SerializedFarm, DeserializedFarmUserData, DeserializedFarm, DeserializedFarmsState } from '../types'

const deserializeFarmUserData = (farm: SerializedFarm): DeserializedFarmUserData => {
  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : BIG_ZERO,
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : BIG_ZERO,
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : BIG_ZERO,
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : BIG_ZERO,
  }
}

const deserializeFarm = (farm: SerializedFarm): DeserializedFarm => {
  const { lpAddresses, lpSymbol, pid, dual, multiplier, isCommunity, quoteTokenPriceUsdc, tokenPriceUsdc } = farm

  return {
    lpAddresses,
    lpSymbol,
    pid,
    dual,
    multiplier,
    isCommunity,
    quoteTokenPriceUsdc,
    tokenPriceUsdc,
    token: deserializeToken(farm.token),
    quoteToken: deserializeToken(farm.quoteToken),
    userData: deserializeFarmUserData(farm),
    tokenAmountTotal: farm.tokenAmountTotal ? new BigNumber(farm.tokenAmountTotal) : BIG_ZERO,
    lpTotalInQuoteToken: farm.lpTotalInQuoteToken ? new BigNumber(farm.lpTotalInQuoteToken) : BIG_ZERO,
    lpTotalSupply: farm.lpTotalSupply ? new BigNumber(farm.lpTotalSupply) : BIG_ZERO,
    tokenPriceVsQuote: farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : BIG_ZERO,
    poolWeight: farm.poolWeight ? new BigNumber(farm.poolWeight) : BIG_ZERO,
    lpTokenBalanceMC: farm.lpTokenBalanceMC ? new BigNumber(farm.lpTokenBalanceMC) : BIG_ZERO,
  }
}

export const usePollFarmsPublicData = (includeArchive = false) => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const farmsToFetch = includeArchive ? farmsConfig : nonArchivedFarms
    const pids = farmsToFetch.map((farmToFetch) => farmToFetch.pid)

    dispatch(fetchFarmsPublicDataAsync(pids))
  }, [includeArchive, dispatch, slowRefresh])
}

export const usePollFarmsWithUserData = (includeArchive = false) => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()
  const { account } = useWeb3React()

  useEffect(() => {
    const farmsToFetch = includeArchive ? farmsConfig : nonArchivedFarms
    const pids = farmsToFetch.map((farmToFetch) => farmToFetch.pid)

    dispatch(fetchFarmsPublicDataAsync(pids))

    if (account) {
      dispatch(fetchFarmUserDataAsync({ account, pids }))
    }
  }, [includeArchive, dispatch, slowRefresh, account])
}

/**
 * Fetches the "core" farm data used globally
 * 251 = CAKE-BNB LP
 * 252 = BUSD-BNB LP
 */
export const usePollCoreFarmData = () => {
  const dispatch = useAppDispatch()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync([251, 252])) // FIXME pid 251, 252
  }, [dispatch, fastRefresh])
}

export const useFarms = (): DeserializedFarmsState => {
  const farms = useSelector((state: State) => state.farms)
  const deserializedFarmsData = farms.data.map(deserializeFarm)
  const { loadArchivedFarmsData, userDataLoaded } = farms
  return {
    loadArchivedFarmsData,
    userDataLoaded,
    data: deserializedFarmsData,
  }
}

export const useFarmFromLpPair = (token: Token, quoteToken: Token): DeserializedFarm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.token.symbol === token.symbol && f.quoteToken.symbol === quoteToken.symbol))
  return deserializeFarm(farm)
}

export const useFarmFromPid = (pid: number): DeserializedFarm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return deserializeFarm(farm)
}

export const useFarmFromLpSymbol = (lpSymbol: string): DeserializedFarm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return deserializeFarm(farm)
}

export const useFarmUser = (pid): DeserializedFarmUserData => {
  const { userData } = useFarmFromPid(pid)
  const { allowance, tokenBalance, stakedBalance, earnings } = userData
  return {
    allowance,
    tokenBalance,
    stakedBalance,
    earnings,
  }
}

// Return the base token price for a farm, from a given pid
export const useUsdcPriceFromPid = (pid: number): BigNumber => {
  const farm = useFarmFromPid(pid)
  return farm && new BigNumber(farm.tokenPriceUsdc)
}

export const useLpTokenPrice = (symbol: string) => {
  const farm = useFarmFromLpSymbol(symbol)
  const farmTokenPriceInUsd = useUsdcPriceFromPid(farm.pid)
  let lpTokenPrice = BIG_ZERO

  if (farm.lpTotalSupply.gt(0) && farm.lpTotalInQuoteToken.gt(0)) {
    // Total value of base token in LP
    const valueOfBaseTokenInFarm = farmTokenPriceInUsd.times(farm.tokenAmountTotal)
    // Double it to get overall value in LP
    const overallValueOfAllTokensInFarm = valueOfBaseTokenInFarm.times(2)
    // Divide total value of all tokens, by the number of LP tokens
    const totalLpTokens = getBalanceAmount(farm.lpTotalSupply)
    lpTokenPrice = overallValueOfAllTokensInFarm.div(totalLpTokens)
  }

  return lpTokenPrice
}

// /!\ Deprecated , use the BUSD hook in /hooks

export const usePriceTanUsdc = (): BigNumber => {
  // const tanCroFarm = useFarmFromPid(3) // FIXME pid for TAN/WCRO
  const tanCroFarm = useFarmFromLpPair(tokens.tan, tokens.wcro) // FIXME pid for TAN/WCRO

  const tanPriceUsdcAsString = tanCroFarm.tokenPriceUsdc

  const tanPriceUsdc = useMemo(() => {
    return new BigNumber(tanPriceUsdcAsString)
  }, [tanPriceUsdcAsString])

  return tanPriceUsdc
  // const farms = useSelector((state: State) => state.farms)
  // const prices = getTokenPricesFromFarm(farms.data)
  // return prices[serializeTokens().tan.address] ?? new BigNumber(0);
}
