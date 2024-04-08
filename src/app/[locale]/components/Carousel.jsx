// Import Swiper React components
"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../styles/styles-carousel.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          /*  */
          "--swiper-pagination-bullet-size": "10px",
        }}
      >
        <Box sx={{ bgcolor: "red", width: "100%", height: "100%" }}>
          <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
        </Box>
        <Box>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Box>
        <Box>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Box>
      </Swiper>
    </Box>
  );
}
