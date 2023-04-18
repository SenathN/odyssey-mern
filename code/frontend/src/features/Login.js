import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [credentials, credentialAction] = useState({})

  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <div className='container text-center w-50'>
      <h1 className='display-4 my-3'>Login</h1>

      <form>
        <input type='text' placeholder='Email or username'
          value={credentials.username}
          onChange={(e) => credentialAction({
            type: 'upd_username', payload: e.target.value
          })}
          className='form-control'
        /> <br />
        <input type='password' placeholder='Password'
          value={ credentials.password}
          onChange={(e) => credentialAction({
            type: 'upd_password', payload: e.target.value
          })}
          className='form-control'
        /> <br />
        <br />
        <input type='submit' onClick={(e) => handleLogin(e)} className='btn btn-primary' value={'Sign in'}/>
      </form>
      
      <Link to={'/dashboard'}>dash</Link>
    </div>
  )
}

export default Login