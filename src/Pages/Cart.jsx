import React from 'react'
import UserContext from './UserContext'
import { useContext } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Cart = () => {
    const {items, setItems} = useContext(UserContext);

    const removeItem = (index) => {
        setItems(items.filter(item => item.index !== index))
    }

    const addContent = () => {
        if(items.length > 1 || items.length === 0) {
            return <h2>You have {items.length} items in you cart</h2>
        } else {
            return <h2>You have {items.length} item in you cart</h2>
        }
    }
  return (
    <div>
        <div className="cart-content">
            {addContent()}
        </div>
        <div className='cart-items'>
            <Splide options={{
                pagination: false,
                arrows: true, 
                gap: '2rem'
            }}>
        {items.map((item, index) => (
            <SplideSlide key={index} className='item-container'>
                <div className='cart-img-container'>
                    <img src={item.source} alt='cart-image'/>
                </div>
                <div className="cart-content">
                    <div className="cart-info">
                        <p className="item-name">{item.name}</p>
                        <p className="item-price">${item.price}</p>
                    </div>
                    <button className="remove-item" onClick={() => removeItem(item.index)}><span>Remove from cart</span></button>
                </div>
            </SplideSlide>
        ))}
        </Splide>
        </div>
    </div>
  )
}

export default Cart