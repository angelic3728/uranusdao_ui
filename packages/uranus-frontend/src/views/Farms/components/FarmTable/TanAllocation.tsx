import React from 'react'
import styled from 'styled-components'
import { getSupplyPerBlock } from 'utils/supply'

export interface AllocationProps {
  poolWeight: number
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  button {
    width: 20px;
    height: 20px;
  }
`

const AprWrapper = styled.div`
  min-width: 60px;
  text-align: left;
`

const TanAllocation: React.FC<AllocationProps> = ({
  poolWeight
}) => {
  const TAN_PER_BLOCK = Number(getSupplyPerBlock())

  return <Container>
    <AprWrapper>{(poolWeight * TAN_PER_BLOCK).toLocaleString('en-US', { maximumFractionDigits: 2 })}/ Block</AprWrapper>
  </Container>
}

export default TanAllocation
