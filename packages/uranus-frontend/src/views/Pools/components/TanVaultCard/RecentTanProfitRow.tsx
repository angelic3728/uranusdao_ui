import React from 'react'
import { Flex, Text } from 'uranus-uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { usePriceTanUsdc } from 'state/farms/hooks'
import { useTanVault } from 'state/pools/hooks'
import { getTanVaultEarnings } from 'views/Pools/helpers'
import RecentTanProfitBalance from './RecentTanProfitBalance'

const RecentTanProfitCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    pricePerFullShare,
    userData: { tanAtLastUserAction, userShares, lastUserActionTime },
  } = useTanVault()
  const tanPriceUsdc = usePriceTanUsdc()
  const { hasAutoEarnings, autoTanToDisplay, autoUsdToDisplay } = getTanVaultEarnings(
    account,
    tanAtLastUserAction,
    userShares,
    pricePerFullShare,
    tanPriceUsdc.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text small color="textSubtle">{`${t('Recent TAN profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentTanProfitBalance
          tanToDisplay={autoTanToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentTanProfitCountdownRow
