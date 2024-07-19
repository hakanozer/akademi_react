import React, { FormEvent, useEffect, useMemo, useRef, useState, useTransition } from 'react'
import { getUser } from '../utils/storge'
import { validateInput } from '../utils/validate'
import CustomInput from '../components/CustomInput'

function Profile() {

  // use Transition
  const [isPending, startTransition] = useTransition();


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

  const [visible, setVisible] = useState(false)
  const [alertText, setAlertText] = useState('')
  const showAlert = () => {
    
    setTimeout(() => { 
      startTransition(() => { 
        setVisible(!visible)
        setAlertText('Alert Message!')
      })
    }, 3000);
    
  }

  return (
    <>
      <div className='row'>
        <div className='col-sm-6'>
          <h2>Profile</h2>
          {user &&
            <form onSubmit={sendForm} ref={formRef} >
              <CustomInput title='FirstName' state={firstName} setState={setFirstName} inputRef={firstRef} />
              <CustomInput title='LastName' state={lastName} setState={setLastName} inputRef={lastRef} />
              <CustomInput title='Email' state={email} setState={setEmail} inputRef={emailRef} />
              <button className='btn btn-success'>Send</button>
            </form>
          }
        </div>
        <div className='col-sm-6'>
          <button onClick={showAlert} className='btn btn-danger btn-sm'>Alert - Show / Hide</button>
          <div>{isPending === true ? 'true' : 'false'}</div>
          <div 
            style={{
              backgroundColor: '#828282',
              marginTop:5,
              borderRadius: 5,
              padding: 5,
              color: 'white', 
              opacity: isPending ? 0 : visible ? 1 : 0
            }}
          >{alertText}</div>
          <hr/>
          {memo.map((item, index) => 
            <h4 key={index}>{item}</h4>
          )}
        </div>
      </div>
    </>
  )
}

export default Profile