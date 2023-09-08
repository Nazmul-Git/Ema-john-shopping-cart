import React, { useContext } from 'react';

import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(result => {
                const outUser = result.user;
                console.log(outUser);
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (
        <nav className=' bg-orange-700 shadow-2xl shadow-white flex justify-between  items-center m-8 p-8 sticky top-0 z-50 rounded-md'>
            <img src={logo} alt="" />
            <div className='text-2xl font-bold flex justify-between gap-6 font-serif relative text-black'>

                <div className='md:flex gap-20 '>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/shop">Shop</ActiveLink>
                    <ActiveLink to="/orders">Orders</ActiveLink>
                    <ActiveLink to="/inventory">Inventory</ActiveLink>
                </div>


                <div className='ml-96'>
                    {
                        user ? <>
                            <span>{user.email}</span>
                            <button onClick={handleSignOut} className='btn btn-xs ml-10'>Sign Out</button>
                        </> :

                            <div className='flex gap-6  '>
                                <ActiveLink to='/login'>Login</ActiveLink>
                                <ActiveLink to="/sign-up">Sign up</ActiveLink>
                            </div>

                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;