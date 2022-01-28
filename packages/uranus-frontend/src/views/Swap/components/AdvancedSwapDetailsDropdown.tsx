import React from 'react'
import styled from 'styled-components'
import useLastTruthy from 'hooks/useLast'
import useTheme from 'hooks/useTheme'
import { AdvancedSwapDetails, AdvancedSwapDetailsProps } from './AdvancedSwapDetails'

const AdvancedDetailsFooter = styled.div<{ show: boolean }>`
  width: 100%;
  max-width: 570px;

  bottom: 0px;
  position: absolute;
  z-index: 1;
`

export default function AdvancedSwapDetailsDropdown({ trade, ...rest }: AdvancedSwapDetailsProps) {
  const lastTrade = useLastTruthy(trade)
  const { theme } = useTheme()
  return (
    <AdvancedDetailsFooter show={Boolean(trade)} style={{backgroundColor: trade ? theme.colors.tertiary : theme.colors.backgroundAlt }}>
      <AdvancedSwapDetails {...rest} trade={trade ?? lastTrade ?? undefined} />
    </AdvancedDetailsFooter>
  )
}

