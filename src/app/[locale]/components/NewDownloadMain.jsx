"use client";
import React, { memo } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SocialMedia from "./SocialMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";

// eslint-disable-next-line react/display-name
const NewDownloadImage = memo(() => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { t, i18n } = useTranslation();

  const imageUrls = {
    xs: "/wal1Mobile.svg",
    md: "/wal1.svg",
  };

  const imagesUrls2 = {
    xs: "/wal2Mobile.svg",
    md: "/wal2.svg",
  };

  const imagesUrls3 = {
    xs: "/wal3Mobile.svg",
    md: "/wal3.svg",
  };

  const imageUrl = isSmallScreen ? imageUrls.xs : imageUrls.md;
  const imageUrl2 = isSmallScreen ? imagesUrls2.xs : imagesUrls2.md;
  const imageUrl3 = isSmallScreen ? imagesUrls3.xs : imagesUrls3.md;
  return (
    <Box
      sx={{
        width: "100vw",
        bgcolor: "#20201f",
        height: "100%",
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
                src={imageUrl}
                alt="BusinessWallpaper"
                fill
                priority
                style={{
                  position: "absolute",
                  opacity: 0.6,
                  transition: "opacity 2.5s",
                  "object-fit": "cover",
                  objectPosition: !isSmallScreen ? "Top" : "Top Right",
                }}
              />
              <Box
                sx={{
                  padding: { xs: "0 2rem", md: "0 3rem" },
                  width: { xs: "90%", md: "60vw" },

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
                    bottom: { xs: "20vh", sm: "15vh", md: "20vh" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "unset",
                      textAlign: "left",
                      fontSize: { xs: "35px", sm: "4rem", md: "3.5rem" },
                      fontWeight: "bold",
                      color: "white",
                      lineHeight: 1.1,
                      bottom: { md: "11vh" },
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
                src={imageUrl2}
                alt="BusinessWallpaper"
                fill
                style={{
                  position: "absolute",
                  transition: "opacity 2.5s",
                  opacity: 0.6,
                  "object-fit": "cover",
                  objectPosition: !isSmallScreen ? "Top" : "Top Left",
                }}
              />
              <Box
                sx={{
                  padding: { xs: "0 2rem", md: "0 3rem" },
                  width: { xs: "90%", md: "60vw" },

                  display: "flex",
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: { md: "center" },
                  gap: "1rem",
                  bottom: { xs: "20vh", sm: "15vh", md: "20vh" },
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
                    sx={{
                      fontFamily: "unset",
                      fontSize: { xs: "35px", sm: "4rem", md: "3.5rem" },
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
                src={imageUrl3}
                alt="wal3"
                fill
                style={{
                  position: "absolute",
                  transition: "opacity 2.5s",
                  opacity: 0.6,
                  "object-fit": "cover",
                  objectPosition: !isSmallScreen ? "Top" : "Top Center",
                }}
              />
              <Box
                sx={{
                  padding: { xs: "0 2rem", md: "0 3rem" },
                  width: { xs: "90%", md: "60vw" },
                  //height: "70vh",
                  display: "flex",
                  position: "absolute",
                  flexDirection: "column",
                  justifyContent: { md: "center" },
                  gap: "1rem",
                  bottom: { xs: "0vh", md: "20vh" },
                }}
              >
                <Box
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    paddingTop: "0vh",
                    position: "absolute",
                    bottom: { xs: "20vh", sm: "15vh", md: "11vh" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "unset",
                      fontSize: { xs: "35px", sm: "4rem", md: "3.5rem" },
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
          bottom: { xs: "10vh", sm: "5vh", md: "9vh" },
          padding: { xs: "0 0rem", md: "0 3rem" },
          width: { xs: "100%" },
          zIndex: 1,
        }}
      >
        <Link
          href="https://play.google.com/store/apps/details?id=com.stablellc.stable&hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            component={"img"}
            src={
              "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712365529/Stable%20Mockups/Main/google-us_hynsat.svg"
            }
            sx={{
              width: { xs: "165px", sm: "220px", md: "220px" },
              cursor: "pointer",
            }}
          ></Box>
        </Link>

        <Link
          href={"https://apps.apple.com/co/app/stable/id6446915567"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            component={"img"}
            src={
              "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712365525/Stable%20Mockups/Main/apple_osd3hx.svg"
            }
            sx={{
              width: { xs: "155px", sm: "200px", md: "210px" },
            }}
          ></Box>
        </Link>
      </Box>
    </Box>
  );
});

export default NewDownloadImage;
