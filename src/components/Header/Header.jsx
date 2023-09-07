import React, { useContext } from 'react';

import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

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
        <nav className=' bg-orange-700 shadow-2xl shadow-white   flex justify-between items-center m-8 p-8 sticky top-0 z-50 rounded-md'>
            <img src={logo} alt="" />
            <div className='text-2xl font-bold flex justify-between gap-6 font-serif relative text-black'>

                <div className='flex gap-20 '>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                </div>


                <div className='ml-96'>
                    {
                        user ? <>
                            <span>{user.email}</span>
                            <button onClick={handleSignOut} className='btn btn-xs ml-10'>Sign Out</button>
                        </> :

                            <div className='flex gap-6  '>
                                <Link to='/login'>Login</Link>
                                <Link to="/sign-up">Sign up</Link>
                            </div>

                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;