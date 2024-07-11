import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { search } from '../utils/api'
import { IProducts } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import loadGif from '../assets/loading.gif'
import Pagination from '../components/Pagination'

function Search() {

  const [products, setProducts] = useState<IProducts | null>()
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(10)
  const [pages, setPages] = useState<number[]>([])
  const [params, setParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [qParam, setQParam] = useState('')

  useEffect(() => {
    fncSearch(skip)
  }, [params])

  const fncSearch = (skipParams: number) => {
    const q = params.get('q')
    if (q) {
        setQParam(q)
        setProducts(null)
        setLoading(true)
        search(q, skipParams, limit).then(res => {
            const obj = res.data
            setProducts(obj)
            let count = 0
            let countArr:number[] = []
            count = Math.ceil(obj.total / limit)
            for (let i = 0; i < count; i++) {
                countArr.push(i)
            }
            setPages(countArr)
            setLoading(false)
        })
    }
  }
  

  return (
    <>
    <h2>Search: {qParam}</h2>
    <div>Count: { products?.total }</div>
    { loading &&
        <center><img src={loadGif} width={100} /></center>
    }
    { products &&
      <div className='row'>
      { products.products.map((item, index) => 
        <ProductItem key={index} item={item} />
      )}
      <Pagination products={products} limit={limit} fncGetProduct={fncSearch}  />
    </div>
    }
    </>
  )
}

export default Search