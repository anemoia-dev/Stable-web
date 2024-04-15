// Import Swiper React components

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReactPlayer from "react-player";

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
          height: "100%",
        }}
      >
        <Box sx={{ width: "100%", height: "100%" }}>
          <SwiperSlide className="swiper-slide">
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <ReactPlayer
                light={
                  <Image
                    src="https://res.cloudinary.com/dzlhhijtz/image/upload/v1712362743/Stable%20Mockups/Main/whiteGif_wjaxvz.gif"
                    alt="Thumbnail"
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                }
                url={"https://www.youtube.com/watch?v=dZE1DNDgHxU"}
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </SwiperSlide>
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
