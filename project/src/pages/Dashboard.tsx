import React, { useEffect, useState } from 'react'
import { allProducts } from '../utils/api'
import { Product } from '../models/IProducts'
import ProductItem from '../components/ProductItem'

function Dashboard() {

  const [arr, setArr] = useState<Product[]>([])
  useEffect(() => {
    allProducts().then(res => {
      const arr = res.data.products
      setArr(arr)
    })
  }, [])


  return (
    <>
      <h2>Dashboard</h2>
      <div className='row'>
        { arr.map((item, index) => 
          <ProductItem key={index} item={item} />
        )}
      </div>
    </>
  )

}

export default Dashboard