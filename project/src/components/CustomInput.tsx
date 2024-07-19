import React, { useId } from 'react'

function CustomInput(props: { 
    title: string, 
    inputRef: React.LegacyRef<HTMLInputElement> | undefined,
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}) {

  const id = useId()  

  return (
    <div className='mb-3'>
        <label htmlFor={id} className="form-label">{props.title}</label>
        <input id={id} ref={props.inputRef} onChange={(evt) => props.setState(evt.target.value)} value={props.state} className='form-control' placeholder={props.title} />
    </div>
  )
}

export default CustomInput