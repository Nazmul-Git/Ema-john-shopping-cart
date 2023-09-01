import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.init';




const Login = () => {
    const [user, setUser] = useState([]);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const emailUser = result.user;
                console.log(emailUser);
                setUser(emailUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='mt-48'>
            <p className='text-center'>Please..login with your  <button onClick={googleSignIn} className='text-blue-500  font-extrabold font-serif'>Gmail</button></p>
            {
                user && <div className=' flex flex-1 justify-center items-center gap-4 mt-28'>
                    <img src={user.photoURL} alt="" />
                    <div>
                        <h2> {user.displayName} </h2>
                        <h2> {user.email} </h2>
                    </div>
                </div>
            }
        </div>
    );
};

export default Login;