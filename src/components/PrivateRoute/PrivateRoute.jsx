import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    if(loading){
        return <div className="radial-progress mt-48 ml-96" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}>70%</div>

    }

    if(user){
        return children;
    }

    return <Navigate to='/login' replace={true}></Navigate>
   
};

export default PrivateRoute;