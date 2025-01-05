import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import registerLottieData from "../assets/lottie/register.json";  // Make sure this path is correct
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';

const Register = () => {
    
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("Register form submitted", email, password);
        createUser(email,password)
            .then(()=>{
                console.log('User created successfully')
                navigate('/')
            })  
            .catch((error)=>{
                console.log('Error creating user',error)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Lottie Animation */}
                <div className="mx-auto lg:text-left w-96">
                    <Lottie animationData={registerLottieData} loop={true} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
