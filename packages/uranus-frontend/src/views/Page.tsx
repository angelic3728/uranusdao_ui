import React from 'react'
import styled from 'styled-components'
import { Flex } from 'uranus-uikit'
import Footer from 'components/Menu/Footer'
import SubNav from 'components/Menu/SubNav'
import Toolbar from 'components/Toolbar'
import { SEOHead } from 'components/Layout/Page'
import MoleFooterAnimation from 'components/MoleFooterAnimation'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 70px);
  background: ${({ theme }) => theme.isDark
            ? theme.colors.darkPurple
            : theme.colors.lightAqua};

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    padding-bottom: 20px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    min-height: calc(100vh - 78px);
  }
`

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div style={{ marginLeft: '250px', padding:10 }}>
      <SEOHead />
      <Toolbar />
      <StyledPage {...props}>
        <SubNav />
        {children}
        <Flex flexGrow={2} />
        {/* <Footer /> */}
        {/* <MoleFooterAnimation /> */}
      </StyledPage>
    </div>
  )
}

export default Page
