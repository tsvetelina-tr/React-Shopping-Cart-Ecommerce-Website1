import React from 'react'
import { useParams } from "react-router-dom";
import { Items } from './ProductsData' 

const ProductData = () => {
  const { index } = useParams();
  return (
    <div className='product-data-container'>
      <h2>{Items[index].describtion}</h2>
    </div>
  )
}

export default ProductData