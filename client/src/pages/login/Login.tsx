import React from 'react'
import './login.css'
import {AuthContext} from '../../context/authContext'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

interface Credentials {
  username: string | undefined,
  password: string | udnefined
}

const Login: React.FC = () => {
  const [credentials, setCredentials] = React.useState<Credentials>({
    username: '',
    password: ''
  })
  const {user, loading, error, dispatch} = React.useContext(AuthContext)

  const handleChange = (e) => {
    setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
  }

  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch({type: "LOGIN_START"})
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', credentials)
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
      navigate('/')
    } catch(err) {
      dispatch({type: "LOGIN_FAILURE", payload: err.response.data})
    }
  }

  return (
  <>
    {user ? <div>You are aleready loggen in!</div> : <div className='login'>
      <h1>Login</h1>
      <input 
      type="text"
      placeholder='username'
      id='username'
      className='loginInput'
      onChange={handleChange} />
      <input 
      type="password"
      placeholder='password'
      id='password'
      className='loginInput'
      onChange={handleChange} />
      <button onClick={(e) => handleClick(e)} className="lButton">Login</button>
      {loading && <span>Wait...</span>}
      {error && <span>{error.message}</span>}
    </div>}
  </>
  )
}

export default Login