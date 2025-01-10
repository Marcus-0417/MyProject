import { forwardRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/bundle';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const Carousel = forwardRef((props, ref) => {


    return (
        <>
            <div id="section-1" className="section" ref={ref}>
                <Swiper
                    effect="fade"
                    speed={1000} // 調整動畫速度（1000 毫秒 = 1 秒）
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    fadeEffect={{
                        crossFade: true, // 當前和下一張圖片是否同時淡入淡出
                    }}
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="./images/IMG_1920.webp" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/IMG_8350.webp" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/IMG_8370.webp" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/IMG_8337.webp" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/IMG_8345.webp" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/IMG_8365.webp" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
});

export default Carousel