import React, { useRef } from 'react'
import styled from 'styled-components'
import { Button, ChevronUpIcon } from 'uranus-uikit'
import { useTranslation } from 'contexts/Localization'
import { DeserializedPool } from 'state/types'
import BaseCell, { CellContent } from './Cells/BaseCell'
import PoolRow from './PoolRow'

interface PoolsTableProps {
  pools: DeserializedPool[]
  userDataLoaded: boolean
  account: string
}

const StyledTable = styled.div`
  border-radius: ${({ theme }) => theme.radii.card};
  background-color: ${({ theme }) => theme.card.background};
  > div:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.disabled};
  }
`
const StyledRow = styled.div`
  background-color: transparent;
  display: flex;
`

const NameCell = styled(BaseCell)`
  flex: 5;
  flex-direction: row;
  padding-left: 12px;
  color:${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1 0 150px;
    padding-left: 32px;
  }
`

const NormalCell1 = styled(BaseCell)`
  flex: 1 0 50px;
  color:${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 1 0 120px;
  }
`

const NormalCell2 = styled(BaseCell)`
  flex: 1 0 50px;
  color:${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0 0 120px;
  }
`
const NormalCell3 = styled(BaseCell)`
  flex: 1 0 50px;
  color:${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 2 0 100px;
  }
`


const StyledTableBorder = styled.div`
  padding: 1px 1px 3px 1px;
  background-size: 400% 400%;
`

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

const PoolsTable: React.FC<PoolsTableProps> = ({ pools, userDataLoaded, account }) => {
  const { t } = useTranslation()
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const scrollToTop = (): void => {
    tableWrapperEl.current.scrollIntoView({
      behavior: 'smooth',
    })
  }
  
  return (
    <StyledTableBorder>
      <StyledTable id="pools-table" role="table" ref={tableWrapperEl}>
        <StyledRow role="row">
          <NameCell role="cell">NAME</NameCell>
          <NormalCell1 role="cell">STATUS</NormalCell1>
          <NormalCell2 role="cell">APR/APY</NormalCell2>
          <NormalCell3 role="cell">TOTAL STACKED</NormalCell3>
          <NormalCell3 role="cell">ENDS IN</NormalCell3>
          <NormalCell2 role="cell">DETAILS</NormalCell2>
        </StyledRow>
        {pools.map((pool) => (
          <PoolRow
            key={pool.isAutoVault ? 'auto-tan' : pool.sousId}
            pool={pool}
            account={account}
            userDataLoaded={userDataLoaded}
          />
        ))}
        <ScrollButtonContainer>
          <Button variant="text" onClick={scrollToTop}>
            {t('To Top')}
            <ChevronUpIcon color="text" />
          </Button>
        </ScrollButtonContainer>
      </StyledTable>
    </StyledTableBorder>
  )
}

export default PoolsTable
