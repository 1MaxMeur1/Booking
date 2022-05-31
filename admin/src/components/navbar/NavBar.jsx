import React from 'react'
import './navbar.scss'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatIcon from '@mui/icons-material/Chat';
import WidgetsIcon from '@mui/icons-material/Widgets';

import {DarkModeContext} from '../../context/darkModeContext'

const NavBar = () => {
  const {dispatch} = React.useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
      <div className="search">
        <input type="text" placeholder='Search...' />
        <ManageSearchIcon className='icon'/>
      </div>
      <div className="items">
        <div className="item">
          <GTranslateIcon className='icon'/>
          Eng
        </div>
        <div className="item" onClick={() => dispatch({type: "TOGGLE"})}>
          <NightsStayIcon className='icon'/>
        </div>
        <div className="item">
          <AutoAwesomeMotionIcon className='icon'/>
        </div>
        <div className="item">
          <NotificationsNoneIcon className='icon'/>
          <div className="counter">3</div>
        </div>
        <div className="item">
          <ChatIcon className='icon'/>
          <div className="counter">6</div>
        </div>
        <div className="item">
          <WidgetsIcon className='icon'/>
        </div>
        <div className="item">
          <img className='avatar' src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default NavBar