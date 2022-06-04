import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocilLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    let errorElement;

    if (emailUser) {
        navigate(from, { replace: true });

    }
    if (emailLoading) {
        return <Loading></Loading>
    }
    if (emailError) {
        errorElement = <p className='text-danger'><small>{emailError?.message}</small></p>
    }


    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
        reset();
    };
    return (
        <div>

            <div className="shadow-lg p-3rounded w-50 mx-auto p-5 rounded-4 m-5">
                <h4>Login</h4>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input {...register("email", { required: true })} type="email" className="form-control" placeholder="Email" autoComplete='off' />
                    <br />
                    <input {...register("password", { required: true })} type="password" className="form-control" placeholder="Password" autoComplete='off' />
                    <br />
                    {errorElement}
                    <input type="submit" value="Login" className='btn btn-outline-success w-100' />
                </form>
                <p><small>New To MY App Please ?</small> <span className='text-success'><Link to='/singup' className='text-decoration-none text-success fw-bold'>Sing Up</Link></span> </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;