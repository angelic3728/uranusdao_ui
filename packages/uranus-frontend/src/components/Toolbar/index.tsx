import React from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import * as FaIcons from 'react-icons/fa'
import { Button, ThemeSwitcher } from 'uranus-uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import UserMenu from 'components/Menu/UserMenu'

const ToolbarWrapper = styled.div`
	margin-left:250px;
  	padding:10px 20px;
  	max-height: 90px;
  	display: flex;
  	justify-content: end;
  	background-color: transparent;
`

const Toolbar: React.FunctionComponent = () => {
	const { theme, isDark, toggleTheme } = useTheme()

	return (
        <>
            <ToolbarWrapper>
            	<UserMenu />
            	<ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            </ToolbarWrapper>
        </>
    )
}

export default Toolbar
