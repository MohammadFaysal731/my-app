import React, { useEffect, useState } from 'react';
import Part from '../Part/Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center text-success m-3'>OUR PARTS</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    parts?.map(part => <Part
                        part={part}
                        key={part._id}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;