import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner3.jpg";
import img4 from "../../assets/banner4.jpg";

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto mt-2'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative w-full">
                        <img className='w-full bg-cover h-[200px]  md:h-[500px]' src={img2} alt="Banner 2" />
                        <div className="absolute bottom-4 mx-3  md:bottom-10 md:left-5 text-white bg-black/80 md:p-4 p-1 rounded-lg">
                            <h2 className="text-xs md:text-4xl font-bold text-shadow-md">Study Abroad Opportunities</h2>
                            <p className="text-xs md:text-lg mt-2">Explore educational visas for top international institutions.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full">
                        <img className='w-full bg-cover h-[200px] md:h-[500px]' src={img4} alt="Banner 4" />
                        <div className="absolute bottom-4 mx-3  md:bottom-10 md:left-5 text-white bg-black/80 md:p-4 p-1 rounded-lg">
                            <h2 className="text-xs md:text-4xl font-bold text-shadow-md">Tourist Visas Made Simple</h2>
                            <p className=" text-xs md:text-lg mt-2">Plan your dream vacation with hassle-free visa services.</p>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="relative w-full">
                        <img className='w-full bg-cover h-[200px] md:h-[500px]' src={img3} alt="Banner 3" />
                        <div className="absolute bottom-4 mx-3  md:bottom-10 md:left-5 text-white bg-black/80 md:p-4 p-1 rounded-lg">
                            <h2 className="text-xs md:text-4xl font-bold text-shadow-md">Work and Employment Visas</h2>
                            <p className=" text-xs md:text-lg mt-2">Find the right visa for your global career goals.</p>
                        </div>
                    </div>
                </SwiperSlide>

                
               
            </Swiper>
        </div>
    );
};

export default Banner;
