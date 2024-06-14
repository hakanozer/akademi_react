import React, { useState, FormEvent } from 'react'
import { NavLink } from 'react-router-dom'

function Login() {

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = (evt: FormEvent) => {
    evt.preventDefault()
    console.log(username, password)
  }

  return (
    <>
        <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-2 col-lg-4 col-xl-4 col-xxl-4'></div>
            <div className='col-xs-12 col-sm-12 col-md-8 col-lg-4 col-xl-4 col-xxl-4'>
                <h2>User Login</h2>
                <form onSubmit={loginUser}>
                    <div className='mb-3'>
                        <input onChange={(evt) => setUserName(evt.target.value)} required placeholder='Username' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <input onChange={(evt) => setPassword(evt.target.value)} required type='password' placeholder='Password' className='form-control' />
                    </div>
                    <button className='btn btn-success'>Send</button>
                    <NavLink to={'/register'}  className='btn btn-danger mx-1'>Register</NavLink>
                </form>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-2 col-lg-4 col-xl-4 col-xxl-4'></div>
        </div>
    </>
  )
}

export default Login