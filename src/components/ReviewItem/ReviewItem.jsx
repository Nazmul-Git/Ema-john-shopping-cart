import React from 'react';
import '../ReviewItem/ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, deleteButton }) => {
    const {id, name, img, quantity,price } = product;
    return (
            <div className='reviewItems'>
                <img src={img} alt="" />
                <div className='info'>
                   <p>{name}</p>
                   <p>Price : <span>$ {price}</span></p>
                   <p>Quantity :{quantity}</p>
                </div>
                <button onClick={()=>deleteButton(id)} className='btn-dlt'>
                    <FontAwesomeIcon className="btn-icn" icon={faTrashAlt}></FontAwesomeIcon>
                </button>


            </div>     
    );
};

export default ReviewItem;