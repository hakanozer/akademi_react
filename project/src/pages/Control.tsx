import React from 'react'
import { getUser } from '../utils/storge'
import { Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Control( props: {item: JSX.Element} ) {

  const user = getUser()  
  
  return (
    <>
        {
            user === null 
            ?
                <Navigate to={'/'} replace={true}  />
            :
            <>
                <Navbar user={user} />
                <div className='row'>
                    <div className='col-sm-0'></div>
                    <div className='col-sm-12'>
                        {props.item}
                    </div>
                </div>
            </>
        }
    </>
  )
}

export default Control