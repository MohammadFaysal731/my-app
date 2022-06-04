import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { FcGoogle } from 'react-icons/fc';
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    let errorElement;
    if (googleUser) {
        navigate('/blogs')
    }
    if (googleLoading) {
        return <Loading></Loading>
    }
    if (googleError) {
        errorElement = <p className='text-danger'><small>{googleError?.message}</small></p>
    }

    return (
        <div className='mt-4 '>
            <div className="d-flex justify-content-center align-items-center m-3">
                <hr className='w-50 m-2' /> OR <hr className='w-50 m-2' />
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-outline-success w-100'><FcGoogle className='fs-4 me-2'></FcGoogle>Continue With Google</button>
        </div>
    );
};

export default SocialLogin;