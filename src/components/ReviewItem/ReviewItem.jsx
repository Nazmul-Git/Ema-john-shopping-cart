import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, deleteButton }) => {
    const { id, name, img, quantity, price } = product;
    return (
        <div className=' bg-neutral-800 m-8 flex gap-40 items-center p-4'>
            <img className='h-25 w-40' src={img} alt="" />

            <div className='flex-1 w-40'>
                <p>{name}</p>
                <p>Price : <span>$ {price}</span></p>
                <p>Quantity :{quantity}</p>
            </div>
            <button onClick={() => deleteButton(id)} className='flex-1 w-32'>
                <FontAwesomeIcon icon={faTrashAlt} className='h-20 w-20 text-red-700'></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewItem;