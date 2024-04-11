"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SocialMedia from "./SocialMedia";
/* const imagenes = [
  {
    imagen:
      "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712344802/Stable%20Mockups/Main/wal1_1_nvxjpy.svg",
  },
  {
    imagen:
      "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712344451/Stable%20Mockups/Main/BusinessWallpaper_bdwosi.svg",
  },
  {
    imagen:
      "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712344217/Stable%20Mockups/Main/LifeWallpaper_dys5ud.svg",
  },
]; */

const imagenes = [
  {
    imagen: "/wal1.svg",
  },
  {
    imagen: "/wal2.svg",
  },
  {
    imagen: "/wal3.svg",
  },
];
const imagenesMobile = [
  {
    imagen: "/wal1Mobile.svg",
  },
  {
    imagen: "/wal2Mobile.svg",
  },
  {
    imagen: "/wal3Mobile.svg",
  },
];

const NewDownloadImage = () => {
  const { t, i18n } = useTranslation();
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [backgrounds] = useState(imagenes.map((imagen) => imagen.imagen));
  const [backgroundsMobile] = useState(
    imagenesMobile.map((imagen) => imagen.imagen)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundIndex]);

  return (
    <Box
      sx={{
        width: "100%",
        /* height: `calc(100% - ${navbarHeight}px)`, */
        height: { xs: "100%", md: "100vh" },

        display: { xs: "block", md: "block" },
        flexDirection: { md: "column" },
        position: "relative",
        alignItems: "center",
        bgcolor: { xs: "#20201f", md: "#20201f" },
        justifyContent: "center",
      }}
    >
      {" "}
      <SocialMedia />
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
        {" "}
        <AnimatePresence>
          <motion.div
            key={backgroundIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={backgrounds[backgroundIndex]}
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
                bgcolor: "red",
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
                  //height: "100%",
                  fontWeight: "bold",
                  color: "white",
                  paddingTop: "0vh",
                  //opacity: 1,

                  //transition: "text 3s fade-in",
                  position: "absolute",
                  bottom: { xs: "20vh", md: "11vh" },
                }}
              >
                <Typography
                  key={backgroundIndex}
                  //className={S.fadein}
                  sx={{
                    fontFamily: "unset",
                    fontSize: { xs: "30px", md: "3.5rem" },
                    fontWeight: "bold",
                    color: "white",
                    lineHeight: 1.1,
                    //display: id === nextWallpaper ? "inline" : "none",
                  }}
                >
                  {t(`downloadMain.text${backgroundIndex}`)}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "left" },
                  gap: "1rem",
                  position: "absolute",
                  bottom: { xs: "9vh", md: "0vh" },
                  width: { xs: "100%" },
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
          </motion.div>
        </AnimatePresence>
      </Box>
      {/* MOBILE */}
      {/* <Box
        sx={{
          width: "100%",
          height: { xs: "100%", md: "100vh" },
          position: "relative",
          alignItems: "center",
          bgcolor: { xs: "#20201f", md: "#20201f" },
          justifyContent: "center",

          display: { xs: "block", md: "none" },
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <AnimatePresence>
          <motion.div
            key={backgroundIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={backgroundsMobile[backgroundIndex]}
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
                bgcolor: "red",
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
                  //height: "100%",
                  fontWeight: "bold",
                  color: "white",
                  paddingTop: "0vh",
                  //opacity: 1,

                  //transition: "text 3s fade-in",
                  position: "absolute",
                  bottom: { xs: "20vh", md: "11vh" },
                }}
              >
                <Typography
                  key={backgroundIndex}
                  //className={S.fadein}
                  sx={{
                    fontFamily: "unset",
                    fontSize: { xs: "30px", md: "3.5rem" },
                    fontWeight: "bold",
                    color: "white",
                    lineHeight: 1.1,
                    //display: id === nextWallpaper ? "inline" : "none",
                  }}
                >
                  {t(`downloadMain.text${backgroundIndex}`)}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "left" },
                  gap: "1rem",
                  position: "absolute",
                  bottom: { xs: "9vh", md: "0vh" },
                  width: { xs: "100%" },
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
          </motion.div>
        </AnimatePresence>
      </Box> */}
    </Box>
  );
};

export default NewDownloadImage;
