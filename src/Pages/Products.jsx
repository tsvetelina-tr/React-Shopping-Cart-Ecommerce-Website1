import React from 'react'
import Product from './Product'
import { Items } from './ProductsData' 

const Products = () => {
  return (
    <div className='products'>
        {Items.map((item, index) => (
            <Product key={index}
            index={index}
            itemSrc={item.src}
            name={item.name}
            price={item.price}
            />
        ))}
    </div>
  )
}

export default Products