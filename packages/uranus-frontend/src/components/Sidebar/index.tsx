import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import * as FaIcons from 'react-icons/fa' 

import { SidebarData } from './SidebarData';

const MenuIconOpen = styled(Link)`
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    margin-left: 2rem;
    color: #ffffff;
`

const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: #ffffff;
`

const ImageWrapper = styled.div`
  margin-top:15px;
  text-align:center;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    order: 1;
  }
`

const SidebarMenu = styled.div<{close: boolean}>`
    width: 250px;
    height: 100%;
    background-color: ${({ theme }) => theme.isDark
            ? theme.colors.darkGrey
            : theme.colors.grey};
    position: fixed;
    top: 0;
    left: ${({ close}) => close ? '0' : '-100%'};
    transition: .6s;
    z-index: 5;
`

const MenuWrapper = styled.ul`
    margin-top: 20px;
`

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: 1rem 2rem 0.3rem;
`

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0px;
    font-size: 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.isDark
            ? '#FFFFFF'
            : '#000000'};
    &:hover {
        color: ${({ theme }) => theme.isDark
            ? '#1467C6'
            : '#1467C6'};
`

const MenuItemAnchor = styled.a`
    display: flex;
    align-items: center;
    padding: 0px;
    font-size: 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.isDark
            ? '#FFFFFF'
            : '#000000'};
    &:hover {
        color: ${({ theme }) => theme.isDark
            ? '#1467C6'
            : '#1467C6'};
    }
`

const ActiveMenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0px;
    font-size: 20px;
    color: ${({ theme }) => theme.isDark
            ? '#1467C6'
            : '#1467C6'};
    text-decoration:underline;
    &:hover {
        color: ${({ theme }) => theme.isDark
            ? '#1467C6'
            : '#1467C6'};
    }
`

const Devider = styled.div`
    border-bottom: 1px solid gray;
    margin: 15px 10px;
`

const Sidebar: React.FunctionComponent = () => {
    const [close, setClose] = useState(true)
    const { theme, isDark, toggleTheme } = useTheme()
    const [navNum, setNavNum] = useState(0)
    const showSidebar = () => setClose(!close)
    return (
        <>
            <SidebarMenu close={close}>
                <ImageWrapper>
                    <img src={theme.isDark ? "/images/logos/logo-sidebar-dark.svg" : "/images/logos/logo-sidebar.svg"} alt="ifo bunny" width="100px" />
                </ImageWrapper>
                <MenuWrapper>
                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={item.key}>
                            {(navNum === index)?
                                <ActiveMenuItemLinks to={item.path} onClick={() => setNavNum(index)}>
                                    {item.icon}
                                    <span style={{marginLeft: '16px'}}>{item.title}</span>
                                </ActiveMenuItemLinks>
                                :
                                <MenuItemLinks to={item.path} onClick={() => setNavNum(index)}>
                                    {item.icon}
                                    <span style={{marginLeft: '16px'}}>{item.title}</span>
                                </MenuItemLinks>
                            }
                        </MenuItems>
                    )
                })}
                <Devider />
                <MenuItems >
                    {(navNum === 5)?
                        <ActiveMenuItemLinks to='/info' onClick={() => setNavNum(5)}>
                            <FaIcons.FaChartLine />
                            <span style={{marginLeft: '16px'}}>Analytics</span>
                        </ActiveMenuItemLinks>
                        :
                        <MenuItemLinks to='/info'  onClick={() => setNavNum(5)}>
                            <FaIcons.FaChartLine />
                            <span style={{marginLeft: '16px'}}>Analytics</span>
                        </MenuItemLinks>
                    }
                </MenuItems>
                <MenuItems >
                    <MenuItemAnchor href='https://docs.uranusdao.finance/' target='_blink'>
                            <FaIcons.FaFileContract />
                            <span style={{marginLeft: '16px'}}>Docs</span>
                    </MenuItemAnchor>
                </MenuItems>
                <MenuItems >
                    <MenuItemAnchor href='https://github.com/0x-uranus' target='_blink'>
                        <FaIcons.FaFileCode />
                        <span style={{marginLeft: '16px'}}>Code</span>
                    </MenuItemAnchor>
                </MenuItems>
                </MenuWrapper>
            </SidebarMenu>
        </>
    )
}

export default Sidebar
