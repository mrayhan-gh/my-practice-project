import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Features = ({feature}) => {
    return (
        <div className='list-unstyled d-flex align-items-center  text-start ms-3'> 
        <CheckCircleIcon className='text-warning' style={{ width: 20, height: 20}}></CheckCircleIcon>
        <p className='mb-0 ms-3  text-black fs-4 fw-bold'>
            {feature}
        </p>
    </div>
    );
};

export default Features;