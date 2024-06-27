import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

  const params = useParams()
  useEffect(() => {
    const pid = params.pid
    if (pid) {
        console.log(pid)
    }
  }, [])
  
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail