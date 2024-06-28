import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Product } from '../models/IProducts'
import { singleProduct } from '../utils/api'
import loading from '../assets/loading.gif'

function ProductDetail() {

  const [bigImage, setBigImage] = useState("")
  const [product, setProduct] = useState<Product>()
  const location = useLocation()
  const params = useParams()
  useEffect(() => {
    const pid = params.pid
    if (pid) {
        singleProduct(pid).then(res => {
          const item = res.data
          //setBigImage(item.images[0])
          setProduct(item)
        })
    }
  }, [])

  useEffect(() => {
    if (product) {
      setBigImage(product!.images[0])
    }
  }, [product])

  useEffect(() => {
    const item = location.state as Product
    //console.log(item.title)
  }, [])
  
  return (
    <>
      {!product &&
        <>
          <center>
            <img src={loading} width={50} />
          </center>
        </>
      }
      {product && 
        <>
          <div className='row'>
            <div className='col-sm-6'>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              { product.tags.map((tag, index) => 
                <span className="badge text-bg-secondary">{tag}</span>
              )}
            </div>
            <div className='col-sm-6'>
              <img src={bigImage} className='img-fluid' />
              <hr/>
              {product.images.map((iUrl, index) =>
                <img src={iUrl} onClick={() => setBigImage(iUrl)} role='button' className='img-thumbnail me-2' width={100} />
              )}
            </div>
          </div>
          
        </>
      }
    </>
  )
}

export default ProductDetail