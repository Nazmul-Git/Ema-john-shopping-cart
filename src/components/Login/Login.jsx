import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from '../../images/bg-img.jpg'

const Login = () => {
    const {logInUser,googleSignIn}=useContext(AuthContext);
    let navigate=useNavigate();
    const location=useLocation();
    // console.log(location);

    const from=location.state?.from?.pathname || '/';
    // console.log('from=', from);

    const loggedUserDetail=(e)=>{
        e.preventDefault();
        const form= e.target;
        const email= form.email.value;
        const pass= form.password.value;
        // console.log(email, pass);

        logInUser(email, pass)
        .then(result=>{
            const loggedUser= result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, { replace : true });
        })
        .catch(error=>{
            console.error(error);
        })
    }

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser=result.user;
            // console.log(loggedUser);
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    return (
        <div>
            <img src={image} alt="" className="relative"/>
            
            
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col absolute ">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-blue-600">Login now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={loggedUserDetail} className="card-body">
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
                                        <Link to='/sign-up' className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <Link to='/' className="text-center"> 
                               <button onClick={handleGoogleSignIn} className="btn btn-xs m-6 hover:text-blue-600">Sign in with google.</button>
                                      
                            </Link>

                            
                        </div>
                    </div>
                </div>
            

            {/* {
                user && <div className=' flex flex-1 justify-center items-center gap-4 mt-28'>
                    <img src={user.photoURL} alt="" />
                    <div>
                        <h2> {user.displayName} </h2>
                        <h2> {user.email} </h2>
                    </div>
                </div>
            } */}
        </div>
    );
};

export default Login;