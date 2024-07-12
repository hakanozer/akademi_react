import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IUser } from '../models/IUser'
import { allLike } from '../utils/storge'
import { LikesContext } from '../context/LikesContext'
import { PageCountContext } from '../context/PageCountContext'
import { randomQuote } from '../utils/api'
import { useDispatch } from 'react-redux'
import { QuotesAction } from '../useRedux/QuotesAction'
import { QuotesType } from '../useRedux/QuotesType'

function Navbar(props: {user?: IUser}) {

  // userRedux
  const dispatch = useDispatch()

  // use context
  const likesContext = useContext(LikesContext)
  const pageContext = useContext(PageCountContext)
  useEffect(() => {
    likesContext.setLikes(allLike())
    setTimeout(() => {
      randomQuote().then(res => {
        const item = res.data
        const sendObj: QuotesAction = {
          type: QuotesType.QUOTE_LIST,
          payload: item
        }
        dispatch(sendObj)
      })
    }, 2000);

  }, [])
  

  //console.log(process.env.NODE_ENV)
  const navigate = useNavigate()  
  const logOut = () => {
    localStorage.removeItem('user')
    navigate('/', {replace: true})
  }  

  const [q, setQ] = useState('')
  const searchFnc = (evt: FormEvent) => {
    evt.preventDefault()
    navigate('/search?q='+q)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to={'/dashboard'} className="nav-link" aria-current="page">Dashboard</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/likes' className="nav-link">Likes</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/quote' className="nav-link">Quote</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/profile' className="nav-link">Profile</NavLink>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a onClick={logOut} className="dropdown-item" role='button'>Logout</a></li>
            </ul>
            </li>
            <li className="nav-item">
                { props.user && 
                    <a className="nav-link disabled" aria-disabled="true">{ props.user.firstName + ' '+ props.user.lastName } ({likesContext.likes.length}) - ({pageContext.countPage})</a>
                }
            </li>
        </ul>
        <form onSubmit={searchFnc} className="d-flex" role="search">
            <input onChange={(evt) => setQ(evt.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  )
}

export default Navbar