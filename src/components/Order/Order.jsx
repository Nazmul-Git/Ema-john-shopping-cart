import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const carted = useLoaderData();
    // console.log(carted);
    const [cart, setCart] = useState(carted);

    const deleteButton = (id) => {
        // console.log(id);
        const remain = cart.filter(p => p.id !== id);
        setCart(remain);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='flex justify-between gap-20 text-white m-8 '>
            <div className='m-8 w-full p-4'>
                <p>{cart.length}</p>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        deleteButton={deleteButton}
                    >
                        
                    </ReviewItem>)
                }
            </div>
            <div className=' bg-gray-400 p-10 shadow-lg shadow-gray-950 '>
                <Cart cart={carted} clearCart={clearCart} >
                    <Link to="/checkout" className='p-4 bg-green-500 rounded-md text-2xl font bold text-white'>
                        <button>Order Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;