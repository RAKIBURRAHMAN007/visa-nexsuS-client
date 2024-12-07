import React, { useEffect, useState } from 'react';
import LatestVisaCard from './LatestVisaCard';
import { Link } from 'react-router-dom';

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
            <div className='flex justify-center'>
                <Link to='/allVisa'>  <button className='btn bg-black mt-10 px-10  text-white p-2 rounded-xl'>See All Visas</button></Link>
            </div>
        </div>

    );
};

export default LatestVisa;