import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        key: 1,
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Swap',
        path: '/swap',
        key: 2,
        icon: <FaIcons.FaExchangeAlt />
    },
    {
        title: 'Liquidity',
        path: '/liquidity',
        key: 3,
        icon: <FaIcons.FaCheckDouble />
    },
    {
        title: 'Farms',
        path: '/farms',
        key: 4,
        icon: <FaIcons.FaCoins />
    },
    {
        title: 'Mines',
        path: '/mines',
        key: 5,
        icon: <FaIcons.FaDharmachakra />
    }
]
