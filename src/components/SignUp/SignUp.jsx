import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import { Link } from 'react-router-dom';
import image from '../../images/bg-img.jpg'

const SignUp = () => {
    const {user, createUser}=useContext(AuthContext)

    const registerUser=(e)=>{
        e.preventDefault();
        const form= e.target;
        const name=form.name.value;
        const email=form.email.value;
        const pass=form.password.value;
        console.log(name, email, pass);

        //validation pass
        if(!/(?=.*[A-Z])/.test(pass)){
            setError('Please..at list one uppercase latter !');
            return;
        }
        else if(!/(?=.{8,})/.test(pass)){
            setError('Password should be 8 character or long !');
            return;
        }
        else if(!/(?=.*[!@#$&*])/.test(pass)){
            setError('Please add a special character.');
            return;
        }

        createUser(email, pass)
        .then(result=>{
            const newUser=result.user;
            console.log(newUser);
            form.reset();
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    return (
        <div>
            <img src={image} alt="" className="relative"/>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col absolute ">
                        <div className="text-center ">
                            <h1 className="text-5xl font-bold text-blue-600">Register now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={registerUser} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">username</span>
                                    </label>
                                    <input type="text" name='name' required placeholder="username" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link to='/login' className="label-text-alt link link-hover">Already User? Please login</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign up</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default SignUp;