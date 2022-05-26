import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../context/authContext'

const NavBar: React.FC = () => {

  const {user} = React.useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className="navContainer">
        <Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>
          <span className="logo">TrashBooking</span>
        </Link>
        {user ? user.username : <div className="navItems">
          <button className="navButton">Register</button>
          <Link to='/login'>
            <button className="navButton">Login</button>
          </Link>
        </div>}
      </div>
    </div>
  )
}

export default NavBar