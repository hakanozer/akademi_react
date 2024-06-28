import React from 'react'
import { Product } from '../models/IProducts'
import { NavLink, useNavigate } from 'react-router-dom'

function ProductItem( props: {item: Product} ) {

  const navigate = useNavigate()
  const gotoDetail = () => {
    navigate('/productDetail/'+props.item.id, {state: props.item})
  }

  return (
    <div className='col-sm-4'>
      <div className="card m-1">
          <img src={props.item.thumbnail} className="card-img-top" alt={props.item.title} />
          <div className="card-body">
          <h5 className="card-title">{props.item.title}</h5>
          <p className="card-text">{props.item.warrantyInformation}</p>
          <div style={{justifyContent:'space-between', display: 'flex',}}>
            {/*<NavLink to={'/productDetail/'+props.item.id} className="btn btn-primary">Detail</NavLink>*/}
            <div onClick={gotoDetail} role='button' className="btn btn-primary">Detail</div>
            <span className="btn btn-warning">{props.item.price}₺</span>
          </div>
          </div>
      </div> 
    </div>   
  )
}

export default ProductItem