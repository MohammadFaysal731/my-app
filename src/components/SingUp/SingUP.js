import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocilLogin/SocialLogin';



const SingUP = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="">
            <div className="shadow-lg p-3rounded w-50 mx-auto p-5 rounded-4 m-5">
                <h4>Sing Up</h4>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input {...register("name")} type="text" className="form-control" placeholder="Name" autoComplete='off' />
                    <br />
                    <input {...register("email")} type="email" className="form-control" placeholder="Email" autoComplete='off' />
                    <br />
                    <div className="">

                        <input {...register("password")} type="password" className="form-control" placeholder="Password" autoComplete='off' />

                    </div>

                    <br />
                    <input type="submit" value="Sing Up" className='btn btn-success w-100' />
                </form>
                <p><small>Already Have An Account Please ?</small><span className='text-success'> <Link to='/login' className='text-decoration-none text-success fw-bold'>Login</Link> </span></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>

    );
};

export default SingUP;