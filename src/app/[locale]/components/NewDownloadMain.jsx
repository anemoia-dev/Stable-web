"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SocialMedia from "./SocialMedia";

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
/*  */

const NewDownloadImage = () => {
  const { t, i18n } = useTranslation();
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [backgrounds] = useState(imagenes.map((imagen) => imagen.imagen));

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
                  fontWeight: "bold",
                  color: "white",
                  paddingTop: "0vh",
                  position: "absolute",
                  bottom: { xs: "20vh", md: "11vh" },
                }}
              >
                <p
                  key={backgroundIndex}
                  //className={S.fadein}
                  style={{
                    fontFamily: "unset",
                    fontSize: "3.5rem",
                    fontWeight: "bold",
                    color: "white",
                    lineHeight: 1.1,
                  }}
                >
                  {t(`downloadMain.text${backgroundIndex}`)}
                </p>
              </Box>
            </Box>
          </motion.div>
        </AnimatePresence>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "left" },
            gap: "1rem",
            position: "absolute",
            bottom: { xs: "9vh", md: "9vh" },
            padding: { xs: "0 0rem", md: "0 3rem" },
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
      {/* MOBILE */}
    </Box>
  );
};

export default NewDownloadImage;
