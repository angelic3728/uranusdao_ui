import React from 'react'
import { Text, TooltipText, useTooltip } from 'uranus-uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import { isBlindMode } from 'utils'

interface RecentTanProfitBalanceProps {
  tanToDisplay: number
  dollarValueToDisplay: number
  dateStringToDisplay: string
}

const RecentTanProfitBalance: React.FC<RecentTanProfitBalanceProps> = ({
  tanToDisplay,
  dollarValueToDisplay,
  dateStringToDisplay,
}) => {
  const { t } = useTranslation()

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Balance fontSize="16px" value={tanToDisplay} decimals={3} bold unit=" TAN" />
      {!isBlindMode() && <Balance fontSize="16px" value={dollarValueToDisplay} decimals={2} bold prefix="~$" />}
      {t('Earned since your last action')}
      <Text>{dateStringToDisplay}</Text>
    </>,
    {
      placement: 'bottom-end',
    },
  )

  return (
    <>
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        <Balance fontSize="14px" value={tanToDisplay} />
      </TooltipText>
    </>
  )
}

export default RecentTanProfitBalance
