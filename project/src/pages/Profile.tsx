import React, { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { getUser } from '../utils/storge'
import { validateInput } from '../utils/validate'

function Profile() {

  // use refs
  const firstRef = useRef<HTMLInputElement>(null)
  const lastRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)


  const user = getUser()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName)
      setLastName(user.lastName)
      setEmail(user.email)
    }
    if (formRef && formRef.current) {
      formRef.current.style.display = 'none'
      setTimeout(() => {
        if (formRef && formRef.current) {
          formRef.current.style.display = 'block'
        }
      }, 1000);
    }
  }, [])

  
  const sendForm = (evt: FormEvent) => {
    evt.preventDefault()
    console.log(firstRef.current?.value)
      if (firstName === "") {
        validateInput(firstRef)
        
      } else if (lastName === "") {
        validateInput(lastRef)
      }else if (email === "") {
        validateInput(emailRef)
      }else {

      }
  }

  // use memo
  const sampleData = () => {
    console.log("sampleData call")
    const arr:string[] = []
    arr.push("Ankara")
    arr.push("İstanbul")
    arr.push("İzmir")
    arr.push("Bursa")
    return arr
  }
  const memo = useMemo(() => sampleData(), [])

  return (
    <>
      <div className='row'>
        <div className='col-sm-6'>
          <h2>Profile</h2>
          {user &&
            <form onSubmit={sendForm} ref={formRef} >
              <div className='mb-3'>
                <input ref={firstRef} onChange={(evt) => setFirstName(evt.target.value)} value={firstName} className='form-control' placeholder='FirstName' />
              </div>
              <div className='mb-3'>
                <input ref={lastRef} onChange={(evt) => setLastName(evt.target.value)} value={lastName} className='form-control' placeholder='LastName' />
              </div>
              <div className='mb-3'>
                <input ref={emailRef} onChange={(evt) => setEmail(evt.target.value)} value={email} className='form-control' placeholder='Email' />
              </div>
              <button className='btn btn-success'>Send</button>
            </form>
          }
        </div>
        <div className='col-sm-6'>
          {memo.map((item, index) => 
            <h4 key={index}>{item}</h4>
          )}
        </div>
      </div>
    </>
  )
}

export default Profile