import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './Firebase/firebase.config';

export const AuthContext= createContext(null);
const auth= getAuth(app);
const provider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]= useState(true);

    const createUser=(email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
        
    }
    const logInUser=(email, pass)=>{
        return signInWithEmailAndPassword(email, pass)
    }

    const googleSignIn=()=>{
        return signInWithPopup(auth,provider)
    }

    const signOutUser=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);

        })
        return ()=>{
            unsubscribe();
        }
    })

    const info={
        user,
        loading,
        createUser,
        logInUser,
        googleSignIn,
        signOutUser,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;