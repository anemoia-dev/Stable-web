// Import Swiper React components

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReactPlayer from "react-player/lazy";

import "../../../styles/styles-carousel.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const imageSize = {
  xs: { width: "100%", height: "40%" }, // Para pantallas extra pequeñas
  sm: { width: "60%", height: "40%" }, // Para pantallas pequeñas
  md: { width: "40%", height: "60%" }, // Para pantallas medianas
  lg: { width: "30%", height: "20%" }, // Para pantallas grandes
};
export default function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
                    style={{
                      width: imageSize[isSmallScreen ? "xs" : "md"].width,
                      height: imageSize[isSmallScreen ? "xs" : "md"].height,
                      [theme.breakpoints.down("sm")]: {
                        width: imageSize.sm.width,
                        height: imageSize.sm.height,
                      },
                      [theme.breakpoints.down("xs")]: {
                        width: imageSize.xs.width,
                        height: imageSize.xs.height,
                      },
                    }}
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
                    style={{
                      width: imageSize[isSmallScreen ? "xs" : "md"].width,
                      height: imageSize[isSmallScreen ? "xs" : "md"].height,
                      [theme.breakpoints.down("sm")]: {
                        width: imageSize.sm.width,
                        height: imageSize.sm.height,
                      },
                      [theme.breakpoints.down("xs")]: {
                        width: imageSize.xs.width,
                        height: imageSize.xs.height,
                      },
                    }}
                  />
                }
                url={"https://www.youtube.com/watch?v=WTbNeJlyEiM"}
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </SwiperSlide>
        </Box>
      </Swiper>
    </Box>
  );
}
