import React from 'react';
import { Link } from 'react-router-dom';

const VisaCard = ({ visa }) => {
    const { countryImage, countryName, visaType, fee,
        processingTime,_id } = visa;
    return (
        <div className="card card-compact bg-base-100  lg:w-56 mt-4 shadow-xl hover:bg-[#162e40]  hover:text-white">
            <figure>
                <img className=' w-28 bg-cover '
                    src={countryImage}/>
                    
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{countryName}</h2>
                <p className='font-bold'>Visa Type:<span className='font-normal'>{visaType}</span></p>
                <p className='font-bold'>Cost: <span className='font-normal'>{fee}$</span></p>
                <p className='font-bold'>ProcessingTime: <span className='font-normal'>{processingTime}days</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/visaDetails/${_id}`}  ><button className="btn btn-primary text-black bg-white hover:text-white hover:bg-red-500 hover:border-white border-black border ">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;