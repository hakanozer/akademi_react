import React, { useContext, useEffect, useState } from 'react'
import { LikesContext } from '../context/LikesContext'
import { singleProduct } from '../utils/api'
import { Product } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet'

function Likes() {

  const [arr, setArr] = useState<Product[]>([])  
  const likeContext = useContext(LikesContext) 

  useEffect(() => {
    const newArr:Product[] = []
    for (let i = 0; i < likeContext.likes.length; i++) {
        const id = likeContext.likes[i];
        singleProduct(""+id).then(res => {
            const item = res.data
            newArr.push(item)
            setTimeout(() => {
                setArr(newArr)
            }, 300);
        })
    }
  }, [likeContext.likes])
  

  return (
    <>
      <Helmet>
          <title>Like</title>
          <meta name="description" content="Like Detail" />
      </Helmet>
        <h2>Likes</h2>
        <div className='row'>
            { arr.map((item, index) => 
                <ProductItem key={index} item={item} />
            )}
        </div>
    </>
  )
}

export default Likes