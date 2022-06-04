import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const imgStorageKey = '45c46a1b32a1d6a38d670e42fa5d2349'
    const onSubmit = data => {
        const productName = data.productName;
        const description = data.description;
        const minimumQuantity = data.minimumQuantity;
        const availableQuantity = data.availableQuantity;
        const price = data.price;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url
                    const productInformation = {
                        productName: productName,
                        description: description,
                        minimumQuantity: minimumQuantity,
                        availableQuantity: availableQuantity,
                        price: price,
                        image: image
                    }
                    // now post order data on database
                    fetch('http://localhost:5000/part', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(productInformation)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('add')
                            }
                        })

                    // reset();
                }
            })
    }

    return (
        <div>
            <div className="mx-auto w-50 shadow-lg p-3 mb-5 bg-body rounded">
                <h5>Add Product</h5>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input {...register("productName", { required: true })} type="text" className="form-control" placeholder="Product Name" autoComplete='off' />
                    <br />
                    <textarea {...register("description", { required: true })} type="text" className="form-control" placeholder="Product Description" autoComplete='off' />
                    <br />
                    <input {...register("minimumQuantity", { required: true })} type="text" className="form-control" placeholder="Product minimumQuantity" autoComplete='off' />
                    <br />
                    <input {...register("availableQuantity", { required: true })} type="text" className="form-control" placeholder="Product availableQuantity" autoComplete='off' />
                    <br />
                    <input {...register("price", { required: true })} type="text" className="form-control" placeholder="Product Price" autoComplete='off' />
                    <br />
                    <input {...register("image", { required: true })} type="file" className="form-control" placeholder="Product Image" autoComplete='off' />
                    <br />
                    <input type="submit" value="ADD PRODUCT" className='btn btn-outline-success w-100' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;