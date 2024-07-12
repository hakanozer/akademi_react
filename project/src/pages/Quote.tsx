import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'

function Quote() {

  const quotes = useSelector( (item: StateType) => item.QuotesReducer )

  return (
    <>
      <h2>{quotes.author}</h2>
      <div>{quotes.quote}</div>
      <div>{quotes.id}</div>
    </>
  )
}

export default Quote