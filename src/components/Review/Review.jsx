import React, { useContext, useState } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Review = () => {
  const { theme } = useContext(ThemeContext);
  const [reviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Amazing experience!",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      comment: "Great service, will visit again.",
    },
    {
      id: 3,
      name: "Michael Brown",
      rating: 5,
      comment: "Highly recommend this place!",
    },
    {
      id: 4,
      name: "Sarah Lee",
      rating: 4,
      comment: "Good experience overall.",
    },
  ]);

  return (
    <div
      className={`w-11/12  mx-auto mb-24 p-5 rounded shadow ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-bold text-center mb-6">Customer Reviews</h2>

      {/* Swiper Slider */}
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
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div
              className={`border p-6 rounded shadow text-center ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100"
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
              <p className="text-yellow-500 mb-2">
                {Array(review.rating)
                  .fill("★")
                  .join("")}
              </p>
              <p className=" ">{review.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
