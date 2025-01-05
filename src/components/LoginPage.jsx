
import Lottie from 'lottie-react';
import { useContext } from 'react';
import loginLottieData from '../assets/lottie/login.json'
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';
import { easeInOut, motion } from 'framer-motion';
import GoogleBtn from './GoogleBtn';
import { AuthContext } from './../provider/AuthProvider';
const LoginPage = () => {
    const navigate = useNavigate()
    const {signInUser} = useContext(AuthContext)
    const location = useLocation()
    const handleSignIn = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.email.value;
        console.log(email,password)
        signInUser(email,password)
            .then(result=>{
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Welcome back!',
                    confirmButtonText: 'Go to Home',
                    timer: 2000, 
                }).then(()=>{
                    navigate(`${location.state||"/"}`)
                    console.log(location.pathname)
                }) 
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message
                console.log(errorCode,errorMessage)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <motion.div 
                    animate={{x:[0,50,0]}}
                    transition={{ease:easeInOut, repeat:Infinity,duration:3}}
                    className=" mx-auto lg:text-left w-96">
                        <Lottie animationData={loginLottieData}></Lottie>
                </motion.div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign in</button>
                    </div>
                </form>
                <div className='mx-auto p-2'>
                    <GoogleBtn></GoogleBtn>
                </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
