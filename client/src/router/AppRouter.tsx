import React from 'react'
import {Routes, Route} from 'react-router-dom'

import HomePage from '../pages/HomePage'
import List from '../pages/list/List'
import Hotel from '../pages/hotel/Hotel'
import Login from '../pages/login/Login'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/hotels' element={<List />}/>
      <Route path='/hotels/:id' element={<Hotel />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
  )
}

export default AppRouter