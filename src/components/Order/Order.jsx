import React from 'react';
import Cart from '../Cart/Cart';

const Order = () => {
    return (
        <div className='shop-container'>
            <div className="products-container">
                <p>Order</p>
            </div>
            <div className="cart-container">
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Order;