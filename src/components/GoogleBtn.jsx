import React, { useContext } from 'react';
import Swal from 'sweetalert2';

import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';
const GoogleBtn = ({pageInfo }) => {
    const btnText = pageInfo?.ButtonDetails;
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleLogin=()=>{
            console.log('clicked')
            googleSignIn()
            .then(result=>{
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Welcome back!',
                    confirmButtonText: 'Go to Home',
                    timer: 2000, 
                }).then(()=>{
                    navigate('/')
                }) 
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message
                console.log(errorCode,errorMessage)
            })
        }
    return (
        <button onClick={handleGoogleLogin} className='btn '>{btnText || 'Sign in with Google'}</button>
    );
};

export default GoogleBtn;