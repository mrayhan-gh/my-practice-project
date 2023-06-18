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
        <div className='container'>
             <h1 className='text-center fs-1 bg-warning p-1'>Best deal of the town!</h1>
            <div className='row justify-content-around row-cols-md-3 row-cols-sm-1 row-cols-1'>
            {
                pricingOptions.map(priceOption => <PriceCard key={priceOption.id} priceOption={priceOption} ></PriceCard>)
            }
            </div>

     </div>
    );
};

export default Pricing;