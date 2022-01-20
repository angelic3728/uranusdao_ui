import React, { useCallback, useMemo } from 'react'
import FlexLayout from 'components/Layout/Flex'
import { useFarms, usePriceTanUsdc } from 'state/farms/hooks'
import isArchivedPid from 'utils/farmHelpers'
import FarmCard, { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { getDisplayApr } from 'views/Farms/Farms'
import BigNumber from 'bignumber.js'
import { getFarmApr } from 'utils/apr'
import { DeserializedFarm } from 'state/types'
import { getAddress } from 'utils/addressHelpers'
import { useWeb3React } from '@web3-react/core'

const MyFarms = () => {
  const { data: farmsLP, userDataLoaded } = useFarms()
  const { account } = useWeb3React()
  const tanPrice = usePriceTanUsdc()
  // const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X' && !isArchivedPid(farm.pid))
  const activeFarms = farmsLP.filter(farm => farm.pid !== 0 && farm.pid !== 7) // FIXME temp show CRO/TAN and CRO/USDC with 0x

  const farmsList = useCallback(
    (farmsToDisplay: DeserializedFarm[]): FarmWithStakedValue[] => {
      const farmsToDisplayWithAPR: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.lpTotalInQuoteToken || !farm.quoteTokenPriceUsdc) {
          return farm
        }
        const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteTokenPriceUsdc)
        const { tanRewardsApr, lpRewardsApr } = getFarmApr(new BigNumber(farm.poolWeight), tanPrice, totalLiquidity, getAddress(farm.lpAddresses))

        return { ...farm, apr: tanRewardsApr, lpRewardsApr, liquidity: totalLiquidity }
      })

      return farmsToDisplayWithAPR
    },
    [tanPrice],
  )
  
  const chosenFarmsMemoized = useMemo(() => {
    let chosenFarms = []

    chosenFarms = farmsList(activeFarms)

    return chosenFarms
  }, [
    activeFarms,
    farmsList,
  ])
  
  return (
    <div>
      <FlexLayout>
        {chosenFarmsMemoized.map((farm) => (
          <FarmCard
            key={farm.pid}
            farm={farm}
            displayApr={getDisplayApr(farm.apr, farm.lpRewardsApr)}
            tanPrice={tanPrice}
            account={account}
            removed={false}
          />
        ))}
      </FlexLayout>
    </div>
  )
}

export default MyFarms
