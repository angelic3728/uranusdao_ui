import React from 'react'
import styled from 'styled-components'
// import { Text } from 'uranus-uikit'
import useTheme from 'hooks/useTheme'


const Image = styled.img`
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 12%;
    align: right;
`

const Banner: React.FunctionComponent = () => {
    const { theme, isDark, toggleTheme } = useTheme()

    return (
        <>           
            <Image src={theme.isDark ? "/images/land/banner-dark.svg" : "/images/land/banner.svg"} alt="uranus dex"/>
        </>
    )
}

export default Banner
