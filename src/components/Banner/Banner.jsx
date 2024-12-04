// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from "../../assets/banner1.png"
import img2 from "../../assets/banner2.jpg"
import img3 from "../../assets/banner3.jpg"
import img4 from "../../assets/banner4.jpg"
// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto mt-2'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                
                <SwiperSlide><img className='w-full bg-cover md:h-[500px]' src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full bg-cover md:h-[500px]' src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full bg-cover md:h-[500px]' src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full bg-cover md:h-[500px]' src={img4} alt="" /></SwiperSlide>
                

            </Swiper>
        </div>
    );
};
export default Banner