import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocilLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';



const SingUP = () => {
    const { register, handleSubmit, reset } = useForm();
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    let errorElement;

    if (emailUser) {
        navigate(from, { replace: true });

    }
    if (emailLoading || sending || updating) {
        return <Loading></Loading>
    }
    if (emailError || verificationError || updateError) {
        errorElement = <p className='text-danger'><small>{emailError?.message}</small></p>
    }

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        alert('Send Verification Email');
        await updateProfile({ displayName: name });
        toast('Update User')
        reset()
    };

    return (
        <div className="">
            <div className="shadow-lg p-3rounded w-50 mx-auto p-5 rounded-4 m-5">
                <h4>Sing Up</h4>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input {...register("name", { required: true })} type="text" className="form-control" placeholder="Name" autoComplete='off' />
                    <br />
                    <input {...register("email", { required: true })} type="email" className="form-control" placeholder="Email" autoComplete='off' />
                    <br />
                    <input {...register("password", { required: true })} type="password" className="form-control" placeholder="Password" autoComplete='off' />
                    <br />
                    {errorElement}
                    <input type="submit" value="Sing Up" className='btn btn-outline-success w-100' />
                </form>
                <p><small>Already Have An Account Please ?</small><span className='text-success'> <Link to='/login' className='text-decoration-none text-success fw-bold'>Login</Link> </span></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>

    );
};

export default SingUP;