import React from 'react';

const Footer = () => {
    return (
        <div className=' p-5 bg-[#162e40]  '>

            <div className='md:flex justify-between mt-3'>
                <div className='md:w-1/5'>
                    {/* <a className="btn btn-ghost rounded-none text-sm md:text-2xl  text-white border border-white ">
                        <span className="bg-black btn rounded-none text-white ">VISA</span>  NEXUS
                    </a> */}
                    <button className='text-white border pr-4'><span className="bg-black btn rounded-none text-white ">VISA</span>  NEXUS</button>
                    <p className='text-white text-sm flex justify-center  opacity-75 mt-4'> Stay connected for updates and insights to make your journey seamless.</p>

                </div><br />
                <div className='md:w-2/5 '>

                    <div>
                        <nav className="gap-2 clear-start text-white text-center space-y-4">
                            <h1 className="link link-hover font-bold text-2xl">Contact Info</h1>
                            <p className=' text-base md:text-base opacity-65'>
                                <span className='font-bold'>Email:</span> ratulrakibur5@gmail.com
                            </p>
                            <p className=' text-base opacity-65'>
                                <span className='font-bold'>Phone:</span> 01636352751
                            </p>
                            <p className=' text-base opacity-65'>
                                <span className='font-bold'>Address:</span> Sylhet,Bangladesh
                            </p>
                        </nav>

                    </div>
                </div><br />
                <div className='md:w-1/4'>
                    <h1 className='text-center text-white font-bold text-2xl'>Social</h1>
                    <nav className='flex justify-center'>
                        <div className="flex   mt-7">
                            <a href='https://www.facebook.com/rakiburrahman.ratul.14/?_rdr'>
                                <img className='w-14' src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" />
                            </a>
                            <a href='https://x.com/Ratul31363937'>
                                <img className='w-14' src="https://img.icons8.com/?size=100&id=yoQabS8l0qpr&format=png&color=000000" alt="" />
                            </a>
                            <a href='https://github.com/RAKIBURRAHMAN007'>
                                <img className='w-14' src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="" />
                            </a>
                        </div>
                    </nav>
                </div>



            </div>
            <div className='divider divider-neutral'></div>
            <aside>
                <p className='text-white text-center'>Copyright © {new Date().getFullYear()} - All rights reserved by Rakibur Rahman Ratul</p>
            </aside>




        </div>
    );
};

export default Footer;
