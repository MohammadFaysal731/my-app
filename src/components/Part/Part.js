import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, image, description, minimumQuantity, availableQuantity, price } = part;

    const navigate = useNavigate();

    const handlePurchase = id => {
        navigate(`/part/${id}`)
    }
    return (
        <div className="col">
            <div className="card">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text" title={description}>{description.length > 60 ? description.slice(0, 60) + '....' : description}</p>
                    <h4>${price}</h4>
                    <p>Minimum Quantity:{minimumQuantity}/Pcs</p>
                    <p>Available Quantity:{availableQuantity}/Pcs</p>
                    <button onClick={() => handlePurchase(_id)} className='btn btn-success w-100'>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;