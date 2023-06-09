import React from 'react';
import { Button } from 'react-bootstrap';
import { CheckCircleIcon } from '@heroicons/react/24/solid';


const PriceCard = (priceOption) => {
    const {name, price, features} = priceOption.priceOption;
    return (
        <div className=' w-25 bg-success rounded text-center text-white mt-2'>
            <p className='lh-sm'><span  style={{ fontSize: 100,}} className='text-warning fw-bold'>{price}</span> <span className='fs-3 text-dark fw-bold'>/month</span></p>
            <h3 className='text-center text-white-50'>{name}</h3 >
            <div className='list-unstyled text-start ms-3 mb-3'> 
                {
                    features.map(feature => <li className='text-black fw-bold fs-5'> <CheckCircleIcon
                        className='me-2'
                        style={{ width: 20, height: 20,}}
                    /> {feature}</li>)
                }

            </div>
            <Button className='w-100 fw-bold'>Buy now</Button>

        </div>
    );
};

export default PriceCard;