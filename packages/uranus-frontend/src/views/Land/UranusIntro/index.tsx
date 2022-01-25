import React from 'react'
import styled from 'styled-components'
import { Text } from 'uranus-uikit'
import useTheme from 'hooks/useTheme'
import Banner from './banner'

const SectionWrapper = styled.div`
	width:100%;
    text-align:center;
  	padding:10px;
    min-height:calc(100vh - 73px);
`

const Section = styled.div`
    width: 80%;
    margin: 0px 10% 30px;
    text-align: center;
    border-radius:5px;
    background-color: ${({ theme }) => theme.isDark
            ? theme.colors.darkGrey
            : theme.colors.grey};
`
const TopTitle = styled.div`
    padding: 15px;
`

const ImageWrapper = styled.div`
  margin-top:15px;
  text-align:center;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    order: 1;
  }
`

const UranusIntro: React.FunctionComponent = () => {
	const { theme, isDark, toggleTheme } = useTheme()

	return (
        <>
            <SectionWrapper>
            	<Section>
                    <TopTitle>
                        <Text fontSize="30px" fontWeight="bold">Welcome to Uranus DAO</Text>
                        <ImageWrapper>
                            <img src={theme.isDark ? "/images/logos/logo-dark.svg" : "/images/logos/logo.svg"} alt="uranus logo" width="100px" />
                        </ImageWrapper>
                        <Text fontSize="25px">Be part of our Journey to create DeFi3.0</Text>
                        <Text fontSize="25px">We are build and All-In-One DeFi Platform Govern by You!</Text>
                    </TopTitle>
                </Section>
                <Section>
                    <Banner />
                </Section>
            </SectionWrapper>
        </>
    )
}

export default UranusIntro
