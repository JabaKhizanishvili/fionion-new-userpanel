import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { partners } from "../pages/Home/HomeData";
import { Autoplay, FreeMode } from "swiper";

const PartnerSlider = ({ speed, direction }) => {
    return (
        <Swiper
            spaceBetween={5}
            loop
            autoplay={{
                delay: 1,
                disableOnInteraction: false,
            }}
            freeMode={true}
            modules={[Autoplay, FreeMode]}
            slidesPerView={11}
            dir={direction}
            className="swiper"
            speed={8000}
            breakpoints={{
                1400: {
                    slidesPerView: 11,
                },
                1200: {
                    slidesPerView: 9,
                },
                1100: {
                    slidesPerView: 8,
                },
                800: {
                    slidesPerView: 7,
                },
                800: {
                    slidesPerView: 6,
                },
                500: {
                    slidesPerView: 4,
                },
                200: {
                    slidesPerView: 3,
                },
            }}
        >
            {partners.map((item, index) => {
                return (
                    <SwiperSlide key={index} className="item">
                        <div className="flex center ">
                            <img src={item.logo} alt="logo" />
                            <div>{item.text}</div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default PartnerSlider;
