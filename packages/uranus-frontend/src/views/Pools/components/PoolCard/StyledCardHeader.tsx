import React from 'react'
import { CardHeader, Heading, Text, Flex } from 'uranus-uikit'
import { Token } from 'uranus-swap-sdk'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { TokenPairImage } from 'components/TokenImage'
import TanVaultTokenPairImage from '../TanVaultCard/TanVaultTokenPairImage'

const Wrapper = styled(CardHeader)<{ isFinished?: boolean; background?: string }>`
  background: ${({ isFinished, background, theme }) =>
    isFinished ? theme.colors.backgroundDisabled : 'linear-gradient(89.96deg, #AFCDE0 0.03%, #DABF7B 99.83%)'};
  border-radius: ${({ theme }) => `${theme.radii.card} ${theme.radii.card} 0 0`};
  padding: 12px 24px;
`

const StyledTokenPairImage = styled(TokenPairImage)`
  > div {
    width: 42px;
    top: 50%;
    margin-top: -21px;
    bottom: auto;
  }
`

const StyledTanVaultTokenPairImage = styled(TanVaultTokenPairImage)`
  > div {
    width: 42px;
    top: 50%;
    margin-top: -21px;
    bottom: auto;
  }
`

const StyledCardHeader: React.FC<{
  earningToken: Token
  stakingToken: Token
  isAutoVault?: boolean
  isFinished?: boolean
  isStaking?: boolean
}> = ({ earningToken, stakingToken, isFinished = false, isAutoVault = false, isStaking = false }) => {
  const { t } = useTranslation()
  const istanPool = earningToken.symbol === 'TAN' && stakingToken.symbol === 'TAN'
  const background = isStaking ? 'bubblegum' : 'cardHeader'

  const getHeadingPrefix = () => {
    if (isAutoVault) {
      // vault
      return t('Auto')
    }
    if (istanPool) {
      // manual tan
      return t('Manual')
    }
    // all other pools
    return t('Earn')
  }

  const getSubHeading = () => {
    if (isAutoVault) {
      return t('Stake and forget')
    }
    if (istanPool) {
      return t('Manual staking')
    }
    return t('Stake %symbol%', { symbol: stakingToken.symbol })
  }

  return (
    <Wrapper isFinished={isFinished} background={background}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flexDirection="column">
          <Heading color={isFinished ? 'textDisabled' : 'text'} scale="lg">
            {`${getHeadingPrefix()} ${earningToken.symbol}`}
          </Heading>
          <Text color={isFinished ? 'textDisabled' : 'textSubtle'}>{getSubHeading()}</Text>
        </Flex>
        {isAutoVault ? (
          <StyledTanVaultTokenPairImage width={64} height={64} />
        ) : (
          <StyledTokenPairImage primaryToken={earningToken} secondaryToken={stakingToken} width={64} height={64} />
        )}
      </Flex>
    </Wrapper>
  )
}

export default StyledCardHeader
