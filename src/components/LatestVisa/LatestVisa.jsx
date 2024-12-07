import React, { useEffect, useState } from 'react';
import LatestVisaCard from './LatestVisaCard';

const LatestVisa = () => {
    const [latestVisas, setLatestVisas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/latestVisa')
            .then(res => res.json())
            .then(data => {
                setLatestVisas(data);
            })
    }, [])
    return (
        <div className='mb-20 mt-20 w-11/12 mx-auto'>
            <h1 className='text-center font-bold text-xl md:text-3xl'>Our Latest Visas</h1>
            <div className='flex justify-center '>
                <div className='mt-7 lg:grid grid-cols-3 gap-10 '>
                    {
                        latestVisas.map(latestVisa => <LatestVisaCard latestVisa={latestVisa}></LatestVisaCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default LatestVisa;