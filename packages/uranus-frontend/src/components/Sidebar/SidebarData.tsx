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
        title: 'Team',
        path: '/team',
        key: 2,
        icon: <FaIcons.FaUsers />
    },
    {
        title: 'Tasks',
        path: '/tasks',
        key: 3,
        icon: <FaIcons.FaTasks />
    },
    {
        title: 'Chats',
        path: '/chats',
        key: 4,
        icon: <FaIcons.FaRocketchat />
    },
    {
        title: 'Analytics',
        path: '/analytics',
        key: 5,
        icon: <FaIcons.FaRegChartBar />
    }
]
