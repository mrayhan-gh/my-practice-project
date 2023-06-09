import React from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Pricing = () => {
    const pricingOptions = [
        {id: 0, name: "Free", price: "000", features: [
                "Accuracy ",
                "Diligence",
                "Reliability ",
                "Memory",
                "Logical ",
                "Versatility",
                "Automation",
                "Consistency",
                "Remembrance Power",
                "Productiveness",
                "Fast "]},
        {id: 1, name: "Medium", price: "100", features: [
            "Accuracy ",
            "Diligence",
            "Reliability ",
            "Memory",
            "Logical ",
            "Versatility",
            "Automation",
            "Consistency",
            "Remembrance Power",
            "Productiveness",
            "Fast "]},
        {id: 2, name: "Premium", price: "200", features: [
            "Accuracy ",
            "Diligence",
            "Reliability ",
            "Memory",
            "Logical ",
            "Versatility",
            "Automation",
            "Consistency",
            "Remembrance Power",
            "Productiveness",
            "Fast "]}

    ]

    return (
        <div>
            <h1 className='text-center fs-1 bg-warning p-1'>Best deal of the town!</h1>
            <div className='d-flex justify-content-around align-items-center '>
            {
                pricingOptions.map(priceOption => <PriceCard key={priceOption.id} priceOption={priceOption} ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default Pricing;