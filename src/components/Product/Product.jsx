import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        // <div className='m-8'>
        //     <img src={img} alt="" />
        //     <div>
        //         <h6>{name}</h6>
        //         <p>Price: ${price}</p>
        //         <p>Manufacturer: {seller}</p>
        //         <p>Rating: {ratings} Stars</p>
        //     </div>
        //     <button onClick={() => handleAddToCart(props.product)} className='text-2xl font-bold bg-blue-800 p-4 rounded-md text-white'>
        //         Add to Cart
        //         <FontAwesomeIcon icon={faShoppingCart} />
        //         </button>
        // </div>
        <div className="card w-96 bg-base-100 shadow-sm image-full relative">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <h2 className="card-title">Price : {price} $</h2>
                <div className='flex justify-between'>
                    <p>{seller}</p>
                    <p>{ratings}</p>
                </div>
                <div className="card-actions justify-end absolute  bottom-4">
                    <button onClick={() => handleAddToCart(props.product)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;