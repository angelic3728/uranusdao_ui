import React from 'react'
import { Flex } from 'uranus-uikit'
import styled from 'styled-components'
import { SEOHead } from 'components/Layout/Page'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Proposals } from './components/Proposals'

const Chrome = styled.div`
  flex: none;
`

const Content = styled.div`
  flex: 1;
  height: 100%;
`

const Voting = () => {
  return (
    <>
      <SEOHead />
      <Flex flexDirection="column" minHeight="calc(100vh - 64px)">
        <Chrome>
          <Hero />
        </Chrome>
        <Content>
          <Proposals />
        </Content>
        <Chrome>
          <Footer />
        </Chrome>
      </Flex>
    </>
  )
}

export default Voting
