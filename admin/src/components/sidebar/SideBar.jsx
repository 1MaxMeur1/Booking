import React from 'react'
import './sidebar.scss'

import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsIcon from '@mui/icons-material/Settings';
import PatternIcon from '@mui/icons-material/Pattern';
import HealingIcon from '@mui/icons-material/Healing';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import {DarkModeContext} from '../../context/darkModeContext'

import {Link} from 'react-router-dom'

const SideBar = () => {
  const {dispatch} = React.useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to='/' style={{textDecoration: "none"}}>
          <span className="logo">Admin Panel</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to='/' style={{textDecoration: "none", color: "white"}}>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to='/users' style={{textDecoration: "none", color: "white"}}>
          <li>
            <GroupIcon className='icon'/>
            <span>Users</span>
          </li>
          </Link>
          <Link to='/products' style={{textDecoration: "none", color: "white"}}>
          <li>
            <ProductionQuantityLimitsIcon className='icon'/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <FastfoodIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealingIcon className='icon'/>
            <span>System health</span>
          </li>
          <li>
            <PatternIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <ManageAccountsIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
      </div>
    </div>
  )
}

export default SideBar