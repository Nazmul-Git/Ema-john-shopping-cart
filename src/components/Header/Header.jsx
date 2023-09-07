import React from 'react';

import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-gray-600 flex justify-between items-center m-8 p-6 sticky top-0 z-50'>
            <img src={logo} alt="" />
            <div className='text-2xl font-bold flex gap-6 font-serif relative'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/sign-up">Sign up</Link>
            </div>
        </nav>
    );
};

export default Header;