import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const carted=useLoaderData();
    // console.log(carted);
    const [cart,setCart]=useState(carted);

    const deleteButton=(id)=>{
        // console.log(id);
        const remain=cart.filter(p=>p.id !== id);
        setCart(remain);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className="">
                <p>{cart.length}</p>
                {
                    cart.map(product=><ReviewItem 
                    key={product.id}
                    product={product}
                    deleteButton={deleteButton}
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