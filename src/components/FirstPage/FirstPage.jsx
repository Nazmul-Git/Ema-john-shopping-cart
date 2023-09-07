import React from 'react';
import image from '../../images/bg-img.jpg'

const FirstPage = () => {
    return (
        <div>
            <p className='text-center font-serif font-extrabold text-cyan-500 text-4xl'>Welcome to Ema-John</p>
            <img src={image} alt="" />
        </div>
    );
};

export default FirstPage;