import React, { useRef } from 'react'
import styled from 'styled-components'
import { useTable, Button, ChevronUpIcon, ColumnType, useMatchBreakpoints } from 'uranus-uikit'
import { useTranslation } from 'contexts/Localization'
import { isBlindMode } from 'utils'
import { DesktopColumnSchema, DesktopColumnBlindModeSchema, MobileColumnBlindModeSchema, MobileColumnSchema } from '../types'
import Row, { RowProps } from './Row'

export interface ITableProps {
  data: RowProps[]
  columns: ColumnType<RowProps>[]
  userDataReady: boolean
  sortColumn?: string
}

const Container = styled.div`
  filter: ${({ theme }) => theme.card.dropShadow};
  width: 100%;
  background: ${({ theme }) => theme.card.background};
  border-radius: 8px;
`

const TableWrapper = styled.div`
  overflow: visible;

  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 14px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

const TableBody = styled.tbody`
  & tr {
    td {
      font-size: 16px;
      vertical-align: middle;
    }
  }
`

const TableHead = styled.tr`
  & td {
      padding:24px 0px;
      font-size: 17px!important;
      vertical-align: middle;
      color: ${({ theme }) => theme.colors.text}
  }
  border-bottom: 2px solid ${({ theme }) => theme.colors.disabled}
`

const TableContainer = styled.div`
  position: relative;
`

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

const FarmTable: React.FC<ITableProps> = (props) => {
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const { data, columns, userDataReady } = props
  const { isDesktop, isMobile } = useMatchBreakpoints()

  const isSmallerScreen = !isDesktop
  const tableSchema = isSmallerScreen ? (isBlindMode() ? MobileColumnBlindModeSchema : MobileColumnSchema) : (isBlindMode() ? DesktopColumnBlindModeSchema : DesktopColumnSchema)
  const columnNames = tableSchema.map((column) => column.name)

  const { rows } = useTable(columns, data, { sortable: true, sortColumn: 'farm' })
  // debugger;
  const scrollToTop = (): void => {
    tableWrapperEl.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Container id="farms-table">
      <TableContainer>
        <TableWrapper ref={tableWrapperEl}>
          <StyledTable>
            <TableBody>
              <TableHead>
                  <td style={{paddingLeft:32}}>TOKEN PAIR</td>
                  {Object.keys(rows[0].original).map((key) => {
                    const columnIndex = columnNames.indexOf(key)
                    if (columnIndex === -1 || key === 'farm') {
                      return null
                    }
                    return (<td>{key.toUpperCase()}</td>)
                  })
                }
              </TableHead>
              {rows.map((row) => {
                return <Row {...row.original} userDataReady={userDataReady} key={`table-row-${row.id}`} />
              })}
            </TableBody>
          </StyledTable>
        </TableWrapper>
        <ScrollButtonContainer>
          <Button variant="text" onClick={scrollToTop}>
            {t('To Top')}
            <ChevronUpIcon color="text" />
          </Button>
        </ScrollButtonContainer>
      </TableContainer>
    </Container>
  )
}

export default FarmTable
