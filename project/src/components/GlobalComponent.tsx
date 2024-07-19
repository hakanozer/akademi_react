import React, { FC, PropsWithChildren, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const GlobalComponent:FC<PropsWithChildren> = (props) => {

  const navigate = useNavigate()  
  const location =  useLocation()  
  useEffect(() => {
    console.log('GlobalComponent Call')   
  }, []) 

  useEffect(() => {
    const path = location.pathname
    if (path === "/likes") {
        //navigate('/dashboard')
    }
  }, [location])
  
  return (
    <>  
        <div style={{width:'100%', height: 3, backgroundColor:'red',}}></div>
        {props.children}
    </>
  )
}

export default GlobalComponent


