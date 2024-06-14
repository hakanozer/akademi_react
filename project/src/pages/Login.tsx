import React, { useState, FormEvent } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [formError, setFormError] = useState('')

  const loginUser = (evt: FormEvent) => {
    evt.preventDefault()
    setFormError('')
    if (username === '') {
      //window.alert('Username Empty!')
      setFormError('Username Empty!')
    }else if (password === '') {
      //window.alert('Password Empty!')
      setFormError('Password Empty!')
    }else {
      navigate('/dashboard')
      //window.location.href = '/dashboard'
    }
  }

  return (
    <>
        <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-2 col-lg-4 col-xl-4 col-xxl-4'></div>
            <div className='col-xs-12 col-sm-12 col-md-8 col-lg-4 col-xl-4 col-xxl-4'>
                <h2>User Login</h2>

                { formError && formError !== '' && 
                  <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> {formError}
                    <button onClick={() => setFormError('')} type="button" className="btn-close" aria-label="Close"></button>
                  </div>
                }

                <form onSubmit={loginUser}>
                    <div className='mb-3'>
                        <input onChange={(evt) => setUserName(evt.target.value)}  placeholder='Username' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <input onChange={(evt) => setPassword(evt.target.value)}  type='password' placeholder='Password' className='form-control' />
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