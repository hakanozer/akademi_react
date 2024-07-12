import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Product } from '../models/IProducts'
import { singleProduct } from '../utils/api'
import loading from '../assets/loading.gif'
import { allLike, findLike, likeControl } from '../utils/storge'
import { LikesContext } from '../context/LikesContext'
import { Helmet } from 'react-helmet'

function ProductDetail() {

  const [likesStatus, setLikesStatus] = useState(false)
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
      const likeStatu = findLike(product!.id)
      setLikesStatus(likeStatu)
    }
  }, [product])

  useEffect(() => {
    const item = location.state as Product
  }, [])

  // use context
  const likesContext = useContext(LikesContext)
  const fncLike = () => {
    likeControl(product!.id)
    const likeStatu = findLike(product!.id)
    setLikesStatus(likeStatu)
    likesContext.setLikes(allLike())
  }
  
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
        <Helmet>
            <title>{product.title}</title>
            <meta name="description" content={product.description} />
        </Helmet>
          <div className='row'>
            <div className='col-sm-6'>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              { product.tags.map((tag, index) => 
                <span key={index} className="badge text-bg-secondary">{tag}</span>
              )}
              <div>
                <i onClick={fncLike} role='button' className={"bi bi-suit-heart" + (likesStatus === true ? '-fill': '')} style={{fontSize: 30, color: (likesStatus === true ? 'red': '') }}></i>
              </div>
              
            </div>
            <div className='col-sm-6'>
              <img src={bigImage} className='img-fluid' />
              <hr/>
              {product.images.map((iUrl, index) =>
                <img key={index} src={iUrl} onClick={() => setBigImage(iUrl)} role='button' className='img-thumbnail me-2' width={100} />
              )}
            </div>
          </div>
          
        </>
      }
    </>
  )
}

export default ProductDetail