import React from 'react';
import { Button } from 'react-bootstrap';
import Features from '../Features/Features';

const PriceCard = (priceOption) => {
    const {name, price, features} = priceOption.priceOption;
    return (
    <div className='col-8 col-sm-8 col-md-3 col-lg-3  rounded w-25 bg-success text-center text-white mt-2'>
            <p className='lh-sm mt-3'>
                <span  style={{ fontSize: 50}} className='text-warning fw-bold '>{price}</span>
                <span className='fs-3 text-white-50 fw-bold'>/mon</span>
            </p>

            <h3 className='text-center text-info m-0'>{name}</h3 >

            <div className='mb-2'>
                    { features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)}
            </div>
            <Button className='w-100 fw-bold mb-2'>Buy now</Button>
    </div>
    );
};

export default PriceCard;       