import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../provider/ThemeProvider';

const LatestVisaCard = ({ latestVisa }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { countryImage, countryName, description, visaType, fee,
        processingTime, _id,
        validity,
        applicationMethod
    } = latestVisa;
    return (
        <div className={`card card-compact bg-base-100   w-full mt-4 shadow-xl hover:bg-[#162e40]  hover:text-white ${theme === 'dark' ? 'bg-white text-black' : ''}`}>
            <figure>
                <img className=' w-28 bg-cover '
                    src={countryImage} />

            </figure>
            <div className="p-2 w-full space-y-2">
                <h2 className="card-title">{countryName}</h2>
                <p className='font-bold text-[14px]'>
                    Type: 
                    <span className='text-sm font-normal'>{visaType}</span></p>

                <p className="font-bold text-[14px]">
                    Description:
                    <span className="font-normal text-sm w-full  line-clamp-4  " >
                        {description}$
                    </span>
                </p>

                <div className="flex justify-end mt-1">
                    <Link to={`/visaDetails/${_id}`}  ><button className="btn btn-primary text-black bg-white hover:text-white hover:bg-red-500 hover:border-white border-black border ">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default LatestVisaCard;