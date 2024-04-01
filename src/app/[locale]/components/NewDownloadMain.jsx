"use client";
import { useState, useEffect } from "react";
import { useImage } from "react-image";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DownloadMain from "./DownloadMain";
import SocialMedia from "./SocialMedia";
import * as S from "../../../styles/carrusel.module.css";
import { useTranslation } from "react-i18next";
const texts = [
  "Eres más libre cuando  puedes disfrutar tu dinero en todo el mundo.",
  "Una experiencia única se vive intensamente y se recuerda siempre.",
  "Conoce tu tarjeta de entrada al mundo entero.",
];
const NewDownloadImage = ({ navbarHeight }) => {
  const { t, i18n } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const [currentWallpaper, setCurrentWallpaper] = useState(0);
  const [nextWallpaper, setNextWallpaper] = useState(1);

  const wallpapers = ["./wal1.svg", "./wal2.svg", "./wal3.svg"];
  const wallpapersMobile = [
    "./wal1Mobile.svg",
    "./wal2Mobile.svg",
    "./wal3Mobile.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNextWallpaper((prevWallpaper) =>
        prevWallpaper >= wallpapers.length - 1 ? 0 : prevWallpaper + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLoaded(false);

    const timeout = setTimeout(() => {
      setCurrentWallpaper(nextWallpaper);
    }, 1000);

    const imageLoadTimeout = setTimeout(() => {
      setLoaded(true);
    }, 1500);

    return () => {
      clearTimeout(timeout);
      clearTimeout(imageLoadTimeout);
    };
  }, [nextWallpaper]);

  const { src } = useImage({
    srcList: wallpapers[currentWallpaper],
    //srcList: wallpapersMobile[currentWallpaper],
    useSuspense: false,
  });

  return (
    <Box
      sx={{
        width: "100%",
        /* height: `calc(100% - ${navbarHeight}px)`, */
        height: { xs: "100%", md: "100%" },

        position: "absolute",
        alignItems: "center",
        bgcolor: { xs: "#20201f", md: "#20201f" },
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            src={src}
            alt={"Loading..."}
            fill
            priority={false}
            //placeholder="blur"
            style={{
              display: {
                xs: "none",
                md: "block",
              },
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.5s",
              "object-fit": "cover",
              objectPosition: "Top",
            }}
            onLoad={() => setLoaded(true)}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Image
            src={wallpapersMobile[nextWallpaper]}
            alt={"Loading..."}
            fill
            priority={false}
            //placeholder="blur"
            style={{
              display: {
                xs: "none",
                md: "block",
              },
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.5s",
              "object-fit": "cover",
              objectPosition: "Top",
            }}
            onLoad={() => setLoaded(true)}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <SocialMedia /* optionChosen={optionChosen} */ />
        </Box>

        <Box
          key={nextWallpaper}
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
            key={nextWallpaper}
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
            {texts.map((el, id) => {
              return (
                <Typography
                  key={id + el}
                  className={S.fadein}
                  sx={{
                    fontFamily: "unset",
                    fontSize: { xs: "30px", md: "3.5rem" },
                    fontWeight: "bold",
                    color: "white",
                    lineHeight: 1.1,
                    display: id === nextWallpaper ? "inline" : "none",
                  }}
                >
                  {t(`downloadMain.text${id}`)}
                </Typography>
              );
            })}
            {/*  */}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "left" },
              gap: "1rem",
              position: "absolute",
              bottom: { xs: "4vh", md: "0vh" },
              width: { xs: "100%" },
            }}
          >
            <Box
              component={"img"}
              src={"/google-us.svg"}
              sx={{
                width: { xs: "165px", md: "220px" },
              }}
            ></Box>
            <Box
              component={"img"}
              src={"/apple.svg"}
              sx={{
                width: { xs: "155px", md: "210px" },
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewDownloadImage;
