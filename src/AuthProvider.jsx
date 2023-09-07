import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from './Firebase/firebase.config';

export const AuthContext= createContext(null);
const auth= getAuth(app);
const provider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)

    const createUser=(email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
        
    }
    const logInUser=(email, pass)=>{
        return signInWithEmailAndPassword(email, pass)
    }

    const googleSignIn=()=>{
        return signInWithPopup(auth,provider)
    }

    const info={
        user,
        createUser,
        logInUser,
        googleSignIn,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;