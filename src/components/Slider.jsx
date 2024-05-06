import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation } from "swiper/modules";

function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 500,
            disableOnInteraction: true,
            pauseOnMouseEnter:true,
          }}
        
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/ALIADOS/CETEL.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ALIADOS/ICM.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ALIADOS/GLOBAL.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/ALIADOS/INDUNORCA.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ALIADOS/INELECTRA.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/ALIADOS/INSERVEN.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/ALIADOS/METOR.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/ALIADOS/MMO.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ALIADOS/ONEID.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ALIADOS/RAFAY.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ALIADOS/REC.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ALIADOS/SUPERMETAN.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ALIADOS/WISON.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
