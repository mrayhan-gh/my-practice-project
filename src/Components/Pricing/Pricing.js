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
            <div className='row gap-4 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xlg-3  '>
            {
                pricingOptions.map(priceOption => <PriceCard key={priceOption.id} priceOption={priceOption} ></PriceCard>)
            }
            </div>

     </div>
    );
};

export default Pricing;