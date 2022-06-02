import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocilLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>

            <div className="shadow-lg p-3rounded w-50 mx-auto p-5 rounded-4 m-5">
                <h4>Login</h4>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input {...register("email")} type="email" className="form-control" placeholder="Email" autoComplete='off' />
                    <br />
                    <input {...register("password")} type="password" className="form-control" placeholder="Password" autoComplete='off' />
                    <br />
                    <input type="submit" value="Login" className='btn btn-success w-100' />
                </form>
                <p><small>New To MY App Please ?</small> <span className='text-success'><Link to='/singup' className='text-decoration-none text-success fw-bold'>Sing Up</Link></span> </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;