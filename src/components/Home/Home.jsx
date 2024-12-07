import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Success from '../OurSuccess/Success';
import Countrys from '../Countrys/Countrys';
import LatestVisa from '../LatestVisa/LatestVisa';

const Home = () => {
    return (
        <div className='mb-36'>
            <Banner></Banner>
            <LatestVisa></LatestVisa>
            <AboutUs></AboutUs>
            <Countrys></Countrys>
            <Success></Success>
            
           
        </div>
    );
};

export default Home;