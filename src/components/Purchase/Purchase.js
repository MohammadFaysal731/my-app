import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const Purchase = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [part, setPart] = useState([]);
    const [minimumOrderQuantity, setMinimumOrderQuantity] = useState(100);
    const { name, image, description, minimumQuantity, availableQuantity, price } = part;

    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id])

    const onSubmit = data => {
        const name = user.displayName;
        const email = user.email;
        const address = data.address;
        const phone = data.phone;
        const productName = data.productName;
        const minimumQuantity = data.minimumQuantity;

        const orderInformation = {
            name: name,
            email: email,
            address: address,
            phone: phone,
            productName: productName,
            minimumQuantity: minimumQuantity
        }
        // console.log(orderInformation)
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInformation)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Your order is success fully done')
                }
                else {
                    toast.error('Your order is not done')
                }
            })
        reset();
    }

    return (
        <div className='container'>
            <div className="card m-3">
                <div className="row g-0">
                    <div className="col-md-6 border border-success p-2">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <h3 className="card-text"><small className="text-muted">$ {price}</small></h3>
                            <h5>Minimum Quantity :{minimumQuantity} /PCS</h5>
                            <h5>Available Quantity :{availableQuantity} /PCS</h5>
                        </div>
                    </div>
                    <div className="col-md-6 border border-success p-3">
                        <h5>Purchase Your Order</h5>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <input {...register("name", { required: true })} type="text" className="form-control" value={user.displayName} autoComplete='off' />
                            <br />
                            <input {...register("email", { required: true })} type="email" className="form-control" value={user.email} autoComplete='off' />
                            <br />
                            <input {...register("address", { required: true })} type="text" className="form-control" placeholder="Your Address" autoComplete='off' />
                            <br />
                            <input {...register("phone", { required: true })} type="text" className="form-control" placeholder="Your Phone" autoComplete='off' />
                            <br />
                            <input {...register("productName", { required: true })} type="texts" className="form-control" placeholder="Product Name" autoComplete='off' />
                            <br />
                            <input {...register("minimumQuantity", { required: true })} type="number" className="form-control" min={100} max={10000} placeholder="Minimum Quantity 100 Pcs" autoComplete='off' />
                            <p>{ }</p>
                            <br />

                            <input type="submit" value="Purchase" className='btn btn-outline-success w-100' />
                        </form>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Purchase;