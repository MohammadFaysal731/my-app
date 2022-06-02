import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [part, setPart] = useState([]);
    const { name, image, description, minimumQuantity, availableQuantity, price } = part;

    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id])
    return (
        <div className='container'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <h3 className="card-text"><small className="text-muted">$ {price}</small></h3>
                            <h5>Minimum Quantity :{minimumQuantity} /PCS</h5>
                            <h5>Available Quantity :{availableQuantity} /PCS</h5>
                        </div>
                        <div className="">
                            <h1>jjjlkjlkjl</h1>
                        </div>
                    </div>


                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">{price}</small></p>
                        </div>
                        <div className="">
                            <h1>jjjlkjlkjl</h1>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    );
};

export default Purchase;