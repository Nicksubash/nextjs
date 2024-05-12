"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import DTHIMAGE from '/public/img/slider/DTHIMAGE.jpg';
import machine from '/public/img/slider/machine.jpg'
import pipeline from '/public/img/slider/pipeline.jpg'
import pump_test from'/public/img/slider/pump test.jpg'
import pipeline1 from'/public/img/slider/pipeline1.jpg'
import Rottary from'/public/img/slider/Rottary.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '/src/app/swiper_style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
    <div className="">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide>
        <Image src={DTHIMAGE} alt="DTH Image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={machine} alt="machine" />
      </SwiperSlide>

      <SwiperSlide>
        <Image src={pipeline} alt="pipeline" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={pump_test} alt="pump_test" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={pipeline1}  alt="pipeline1" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Rottary} alt="Rottary" />
      </SwiperSlide>
      
      </Swiper>
    </div>
     
    </>
  );
}
