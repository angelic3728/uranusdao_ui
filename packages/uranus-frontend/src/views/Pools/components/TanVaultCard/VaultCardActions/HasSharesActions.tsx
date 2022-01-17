import React from 'react'
import { Flex, Text, IconButton, AddIcon, MinusIcon, useModal, Skeleton } from 'uranus-uikit'
import BigNumber from 'bignumber.js'
import { getBalanceNumber } from 'utils/formatBalance'
import { DeserializedPool } from 'state/types'
import { usePriceTanUsdc } from 'state/farms/hooks'
import { useTanVault } from 'state/pools/hooks'
import Balance from 'components/Balance'
import { isBlindMode } from 'utils'
import NotEnoughTokensModal from '../../PoolCard/Modals/NotEnoughTokensModal'
import { convertSharesToTan } from '../../../helpers'
import VaultStakeModal from '../VaultStakeModal'

interface HasStakeActionProps {
  pool: DeserializedPool
  stakingTokenBalance: BigNumber
  performanceFee: number
}

const HasSharesActions: React.FC<HasStakeActionProps> = ({ pool, stakingTokenBalance, performanceFee }) => {
  const {
    userData: { userShares },
    pricePerFullShare,
  } = useTanVault()
  const { stakingToken } = pool
  const { tanAsBigNumber, tanAsNumberBalance } = convertSharesToTan(userShares, pricePerFullShare)
  const tanPriceUsdc = usePriceTanUsdc()
  const stakedDollarValue = tanPriceUsdc.gt(0)
    ? getBalanceNumber(tanAsBigNumber.multipliedBy(tanPriceUsdc), stakingToken.decimals)
    : 0

  const [onPresentTokenRequired] = useModal(<NotEnoughTokensModal tokenSymbol={stakingToken.symbol} />)
  const [onPresentStake] = useModal(
    <VaultStakeModal stakingMax={stakingTokenBalance} performanceFee={performanceFee} pool={pool} />,
  )
  const [onPresentUnstake] = useModal(<VaultStakeModal stakingMax={tanAsBigNumber} pool={pool} isRemovingStake />)

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex flexDirection="column">
        <Balance fontSize="20px" bold value={tanAsNumberBalance} decimals={5} />
        <Text fontSize="12px" color="textSubtle">
          {tanPriceUsdc.gt(0) && !isBlindMode() ? (
            <Balance value={stakedDollarValue} fontSize="12px" color="textSubtle" decimals={2} prefix="~" unit=" USD" />
          ) : (
            <Skeleton mt="1px" height={16} width={64} />
          )}
        </Text>
      </Flex>
      <Flex>
        <IconButton variant="secondary" onClick={onPresentUnstake} mr="6px">
          <MinusIcon color="primary" width="24px" />
        </IconButton>
        <IconButton variant="secondary" onClick={stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired}>
          <AddIcon color="primary" width="24px" height="24px" />
        </IconButton>
      </Flex>
    </Flex>
  )
}

export default HasSharesActions
