import React from 'react'
import { Product } from '../models/IProducts'
import { NavLink } from 'react-router-dom'

function ProductItem( props: {item: Product} ) {
  return (
    <div className="card col-sm-4">
        <img src={props.item.thumbnail} className="card-img-top" alt={props.item.title} />
        <div className="card-body">
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">{props.item.warrantyInformation}</p>
        <NavLink to={'/productDetail/'+props.item.id} className="btn btn-primary">Detail</NavLink>
        <span className="btn btn-warning">{props.item.price}₺</span>
        </div>
    </div>    
  )
}

export default ProductItem