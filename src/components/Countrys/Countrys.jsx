import React from 'react';
import CountryToolTip from './CountryToolTip';


const Countrys = () => {
    return (
        <div className='mt-20 w-11/12 mx-auto'>
            <h1 className='font-bold text-xl text-center md:text-2xl'>Countries we’re supporting <br />
            for the <span className='text-red-500'>immigration</span></h1>

            <div className='mt-10 w-full flex justify-center'>
                <CountryToolTip></CountryToolTip>
            </div>
            
        </div>
        
    );
};

export default Countrys;