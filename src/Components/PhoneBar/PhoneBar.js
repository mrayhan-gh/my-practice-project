import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line } from 'recharts';


const PhoneBar = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
            axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then( data => {
                const phonesLoaded = data.data.data;
                const phoneData = phonesLoaded.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlePhone;
                });
                setPhones(phoneData)
                console.log(phoneData);
            },  
    )}, [])

    return (
        <div className='text-center'>
            <BarChart width={1000} height={300} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <Tooltip></Tooltip>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
            </BarChart>
           
        </div>
    );
};

export default PhoneBar;