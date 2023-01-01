import React from 'react'
import UserContext from './UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({ index, itemSrc, name, price}) => {
    const { addToCart } = useContext(UserContext);
    let navigate = useNavigate();

    const showProduct = () => {
      navigate(`/products/${index}`)
    }
  return (
    <div className="product">
      <div className="background" onClick={() => showProduct()}></div>
      <figure>
        <img src={itemSrc} alt="product"/>
      </figure>
      <div className="item-content">
        <p className="item-name">{name}</p>
        <p className="item-price">${price}</p>
        <p className="add" onClick={() => addToCart(index, name, price, itemSrc)}>Add to cart</p>
      </div>
    </div>
  )
}

export default Product