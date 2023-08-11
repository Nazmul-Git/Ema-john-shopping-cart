import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const carted=useLoaderData();
    // console.log(carted);
    return (
        <div className='shop-container'>
            <div className="">
                <p>{carted.length}</p>
                {
                    carted.map(product=><ReviewItem 
                    key={product.id}
                    product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={carted}></Cart>
            </div>
        </div>
    );
};

export default Order;