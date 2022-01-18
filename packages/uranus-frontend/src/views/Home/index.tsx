import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { SEOHead } from 'components/Layout/Page'
import Land from '../Land'

const StyledHeroSection = styled(PageSection)`
  margin-left: 250px;
  padding: 10px;
  min-height: 740px;
  ${({ theme }) => theme.mediaQueries.xxl} {
    // padding-top: 70px;
    min-height: 110vh;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '1300px' }

  return (
    <>
      <SEOHead />
      <Land />
    </>
  )
}

export default Home
