import { useState, useEffect, useMemo } from 'react'
import { usePriceTanUsdc } from 'state/farms/hooks'
import { useAppDispatch } from 'state'
import { orderBy } from 'lodash'
import { DeserializedPool } from 'state/types'
import { fetchTanVaultFees, fetchPoolsPublicDataAsync } from 'state/pools'
import { simpleRpcProvider } from 'utils/providers'
import { useTanVault, usePools } from 'state/pools/hooks'
import { getAprData } from 'views/Pools/helpers'

enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  FETCHING = 'fetching',
  SUCCESS = 'success',
  FAILED = 'failed',
}

const useGetTopPoolsByApr = (isIntersecting: boolean) => {
  const dispatch = useAppDispatch()
  const { pools: poolsWithoutAutoVault } = usePools()
  const {
    fees: { performanceFee },
  } = useTanVault()
  const performanceFeeAsDecimal = performanceFee && performanceFee / 100
  const [fetchStatus, setFetchStatus] = useState(FetchStatus.NOT_FETCHED)
  const [topPools, setTopPools] = useState<DeserializedPool[]>([null, null, null, null, null])

  const pools = useMemo(() => {
    const activePools = poolsWithoutAutoVault.filter((pool) => !pool.isFinished)
    const tanPool = activePools.find((pool) => pool.sousId === 0)
    const tanAutoVault = { ...tanPool, isAutoVault: true }
    const tanAutoVaultWithApr = { ...tanAutoVault, apr: getAprData(tanAutoVault, performanceFeeAsDecimal).apr }
    return [tanAutoVaultWithApr, ...poolsWithoutAutoVault]
  }, [poolsWithoutAutoVault, performanceFeeAsDecimal])

  const tanPriceUsdc = usePriceTanUsdc()

  useEffect(() => {
    const fetchPoolsPublicData = async () => {
      setFetchStatus(FetchStatus.FETCHING)
      const blockNumber = await simpleRpcProvider.getBlockNumber()

      try {
        await dispatch(fetchTanVaultFees())
        await dispatch(fetchPoolsPublicDataAsync(blockNumber))
        setFetchStatus(FetchStatus.SUCCESS)
      } catch (e) {
        console.error(e)
        setFetchStatus(FetchStatus.FAILED)
      }
    }

    if (isIntersecting && fetchStatus === FetchStatus.NOT_FETCHED) {
      fetchPoolsPublicData()
    }
  }, [dispatch, setFetchStatus, fetchStatus, topPools, isIntersecting])

  useEffect(() => {
    const getTopPoolsByApr = (activePools: DeserializedPool[]) => {
      const sortedByApr = orderBy(activePools, (pool: DeserializedPool) => pool.apr || 0, 'desc')
      setTopPools(sortedByApr.slice(0, 5))
    }
    if (fetchStatus === FetchStatus.SUCCESS && !topPools[0]) {
      getTopPoolsByApr(pools)
    }
  }, [setTopPools, pools, fetchStatus, tanPriceUsdc, topPools, performanceFeeAsDecimal])

  return { topPools }
}

export default useGetTopPoolsByApr
