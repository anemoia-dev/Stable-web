"use client";
import React, { memo } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SocialMedia from "./SocialMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const NewDownloadImage = memo(() => {
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        width: "100vw",
        bgcolor: "#20201f",
        height: "100vh",
      }}
    >
      <SocialMedia />{" "}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={false}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        //className="mySwiper"
        style={{
          /*  */
          backgroundColor: "#20201f",
          "--swiper-pagination-bullet-size": "10px",
          height: "100%",
        }}
      >
        <Box sx={{ width: "100%", height: "100vh" }}>
          <SwiperSlide style={{ width: "100%", height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "100%", md: "100vh" },
                position: "relative",
                alignItems: "center",
                bgcolor: { xs: "#20201f", md: "#20201f" },
                justifyContent: "center",
                display: { xs: "block", md: "block" },
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Image
                src={"/wal1.svg"}
                alt="BusinessWallpaper"
                fill
                priority
                //loader={"eager"}
                style={{
                  position: "absolute",
                  transition: "opacity 2.5s",
                  "object-fit": "cover",
                  objectPosition: "Top",
                }}
              />
              <Box
                sx={{
                  padding: { xs: "0 1rem", md: "0 3rem" },
                  width: { xs: "90%", md: "60vw" },
                  //height: "70vh",
                  display: "flex",
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: { md: "center" },
                  gap: "1rem",
                  bottom: { xs: "0vh", md: "10vh" },
                }}
              >
                <Box
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    paddingTop: "0vh",
                    position: "absolute",
                    bottom: { xs: "20vh", md: "11vh" },
                  }}
                >
                  <Typography
                    //key={backgroundIndex}
                    //className={S.fadein}
                    sx={{
                      fontFamily: "unset",
                      textAlign: "left",
                      fontSize: { xs: "35px", md: "3.5rem" },
                      fontWeight: "bold",
                      color: "white",
                      lineHeight: 1.1,
                    }}
                  >
                    {t(`downloadMain.text0`)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        </Box>

        <Box sx={{ width: "100%", height: "100vh" }}>
          <SwiperSlide style={{ width: "100%", height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "100%", md: "100vh" },
                position: "relative",
                alignItems: "center",
                bgcolor: { xs: "#20201f", md: "#20201f" },
                justifyContent: "center",

                display: { xs: "block", md: "block" },
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Image
                src={"/wal2.svg"}
                alt="BusinessWallpaper"
                fill
                priority
                //loader={"eager"}
                style={{
                  position: "absolute",
                  transition: "opacity 2.5s",
                  "object-fit": "cover",
                  objectPosition: "Top",
                }}
              />
              <Box
                sx={{
                  padding: { xs: "0 1rem", md: "0 3rem" },
                  width: { xs: "90%", md: "60vw" },
                  //height: "70vh",
                  display: "flex",
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: { md: "center" },
                  gap: "1rem",
                  bottom: { xs: "20vh", md: "11vh" },
                }}
              >
                <Box
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    paddingTop: "0vh",
                    position: "absolute",
                    bottom: { xs: "0vh", md: "10vh" },
                  }}
                >
                  <Typography
                    //key={backgroundIndex}
                    //className={S.fadein}
                    sx={{
                      fontFamily: "unset",
                      fontSize: { xs: "35px", md: "3.5rem" },
                      fontWeight: "bold",
                      color: "white",
                      lineHeight: 1.1,
                      textAlign: "left",
                    }}
                  >
                    {t(`downloadMain.text1`)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        </Box>

        <Box sx={{ width: "100%", height: "100%" }}>
          <SwiperSlide style={{ width: "100%", height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "100%", md: "100vh" },
                position: "relative",
                alignItems: "center",
                bgcolor: { xs: "#20201f", md: "#20201f" },
                justifyContent: "center",

                display: { xs: "block", md: "block" },
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Image
                src={"/wal3.svg"}
                alt="BusinessWallpaper"
                fill
                priority
                //loader={"eager"}
                style={{
                  position: "absolute",
                  transition: "opacity 2.5s",
                  "object-fit": "cover",
                  objectPosition: "Top",
                }}
              />
              <Box
                sx={{
                  padding: { xs: "0 1rem", md: "0 3rem" },
                  width: { xs: "90%", md: "60vw" },
                  //height: "70vh",
                  display: "flex",
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: { md: "center" },
                  gap: "1rem",
                  bottom: { xs: "0vh", md: "10vh" },
                }}
              >
                <Box
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    paddingTop: "0vh",
                    position: "absolute",
                    bottom: { xs: "20vh", md: "11vh" },
                  }}
                >
                  <Typography
                    //key={backgroundIndex}
                    //className={S.fadein}
                    sx={{
                      fontFamily: "unset",
                      fontSize: { xs: "35px", md: "3.5rem" },
                      fontWeight: "bold",
                      color: "white",
                      textAlign: "left",
                      lineHeight: 1.1,
                    }}
                  >
                    {t(`downloadMain.text2`)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        </Box>
      </Swiper>
      {/*  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "left" },
          gap: "1rem",
          position: "absolute",
          bottom: { xs: "9vh", md: "9vh" },
          padding: { xs: "0 0rem", md: "0 3rem" },
          width: { xs: "100%" },
          zIndex: 1,
        }}
      >
        <Box
          component={"img"}
          src={
            "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712365529/Stable%20Mockups/Main/google-us_hynsat.svg"
          }
          sx={{
            width: { xs: "165px", md: "220px" },
          }}
        ></Box>
        <Box
          component={"img"}
          src={
            "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712365525/Stable%20Mockups/Main/apple_osd3hx.svg"
          }
          sx={{
            width: { xs: "155px", md: "210px" },
          }}
        ></Box>
      </Box>
    </Box>
  );
});

export default NewDownloadImage;
