import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
/* 
   12. The My profile route will be available for every user (admin or non-admin. everyone will see this link). The user will see their name and email address on this profile in this link. Also, this page will have fields to add fields like education, location (city/district), phone number, LinkedIn profile link, etc. And users will be able to save this information in the database. Also, the user will be able to update this information.
*/
const MyProfile = () => {

    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)


    const onSubmit = data => {
        const name = user.displayName;
        const email = user.email;
        const education = data.education;
        const location = data.location;
        const phone = data.phone;
        const linkedin = data.linkedin;
        const profileInformation = {
            name: name,
            email: email,
            education: education,
            location: location,
            phone: phone,
            linkedin: linkedin,
        }
        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profileInformation)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Add Your Profile Information')
                    reset();
                }
            })
    }

    return (
        <div>

            <div className="mx-auto w-50 shadow-lg p-3 mb-5 bg-body rounded">
                <h5>MY PROFILE</h5>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input {...register("name", { required: true })} type="text" className="form-control" value={user.displayName} autoComplete='off' />
                    <br />
                    <input {...register("email", { required: true })} type="email" className="form-control" value={user.email} autoComplete='off' />
                    <br />
                    <input {...register("education", { required: true })} type="text" className="form-control" placeholder="Your Education" autoComplete='off' />
                    <br />
                    <input {...register("location", { required: true })} type="text" className="form-control" placeholder="Your location" autoComplete='off' />
                    <br />
                    <input {...register("phone", { required: true })} type="texts" className="form-control" placeholder="Your Phone Number" autoComplete='off' />
                    <br />
                    <input {...register("linkedin", { required: true })} type="text" className="form-control" placeholder="Your Linkedin Profile link" autoComplete='off' />
                    <br />

                    <input type="submit" value="ADD PROFIlE" className='btn btn-outline-success w-100' />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;