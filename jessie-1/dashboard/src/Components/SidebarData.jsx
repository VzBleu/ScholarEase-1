import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 

export const SidebarData = [ 
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard"
    },
    {
        title: "Application",
        icon: <ArticleIcon />,
        link: "/application"
    },
    {
        title: "Status",
        icon: <CheckBoxIcon />,
        link: "/status"
    },
    {
        title: "Profile",
        icon: <AccountCircleIcon />,
        link: "/profile"
    },
 
 ]