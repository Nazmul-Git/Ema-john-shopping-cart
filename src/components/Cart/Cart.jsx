import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, clearCart,children }) => {    // here children is a props which means the inside elements of Cart component
    // const cart = props.cart; // option 1
    // const {cart} = props; // option 2

    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='text-1xl font-semibold text-blue-800 sticky top-20'>
            <h4 className='font-bold text-2xl p-3'>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
            <button onClick={clearCart} className='p-4 bg-red-500 rounded-md mt-8 text-2xl font bold text-white mb-6 mr-6'>
                <span className='mr-4'>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>

            {children} 
            {/* Cart component er peter modde div ace otake dekhasci */}
        </div>
    );
};

export default Cart;