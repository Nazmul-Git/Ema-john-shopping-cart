import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}= useContext(AuthContext);

    if(user){
        return children;
    }
    
    return <Navigate to='/login' replace={true}></Navigate>
   
};

export default PrivateRoute;