import React from 'react'
import './App.css'
import AppRouter from './router/AppRouter'
import './style/dark.scss'
import {DarkModeContext} from './context/darkModeContext'

const App = () => {
  const {darkMode} = React.useContext(DarkModeContext)
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <AppRouter/>
    </div>
  )
}

export default App