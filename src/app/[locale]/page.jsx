"use client";
import React, { useState, useEffect, lazy } from "react";
import Image from "next/image";
/* import styles from "./page.module.css"; */
import NavBar from "./components/NavBar";
import { Box, Typography, Button, Grid } from "@mui/material";
import dynamic from "next/dynamic";

import SocialMedia from "./components/SocialMedia";
/* import DownloadMain from "./components/DownloadMain"; */
const DownloadMain = dynamic(() => import("./components/DownloadMain"));
import { Business } from "@mui/icons-material";
const Options = dynamic(() => import("./components/Options"));
const Life = dynamic(() => import("./components/Life"));
const People = dynamic(() => import("./components/People"));
const HowToUse = dynamic(() => import("./components/HowToUse"));
const BusinessComp = dynamic(() => import("./components/BusinessComp"));
const Footer = dynamic(() => import("./components/Footer"));
import parse from "html-react-parser";
import Head from "next/head";

const wals = [
  "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712344802/Stable%20Mockups/Main/wal1_1_nvxjpy.svg",
  "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712344802/Stable%20Mockups/Main/wal1_1_nvxjpy.svg",
  "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712344802/Stable%20Mockups/Main/wal1_1_nvxjpy.svg",
];
import * as textList from "../../files/Selected.json";
import NewDownloadImage from "./components/NewDownloadMain";

const colors = [" #a9cce3", "#af7ac5", "#273746"];

/* translated */

import { useTranslation, Trans } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
export default function Home() {
  //console.log(dictionary)

  const { t, i18n } = useTranslation("Business");
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [backgroundChanger, setBackgroundChanger] = useState(0);
  const [image, setImage] = useState(colors[backgroundChanger]);
  //const [text, setText] = useState(texts[backgroundChanger]);

  const [optionChosen, setOptionChosen] = useState(-1);

  const OptionsToChoose = (option) => {
    setOptionChosen(option);
  };

  useEffect(() => {
    const changeIndexColor = setInterval(() => {
      // Decrease the countdown value every second
      setBackgroundChanger(
        (prevCountdown) => (prevCountdown + 1) % colors.length
      );
    }, 10000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(changeIndexColor);
  }, []);

  useEffect(() => {
    setImage(wals[backgroundChanger]);
    //setText(texts[backgroundChanger]);
  }, [backgroundChanger, wals]);

  const [navbarHeight, setNavbarHeight] = useState(0);

  const handleNavbarHeight = (height) => {
    setNavbarHeight(height);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //minHeight: "100vh",
          width: "100vw",
          // overflow: "hidden",
        }}
      >
        <NavBar
          onHeightChange={handleNavbarHeight}
          optionChosen={optionChosen}
          OptionsToChoose={OptionsToChoose}
          color={
            optionChosen > 0
              ? textList.List[optionChosen].secondColor
              : optionChosen === -1 && "#202020"
          }
        />

        <Box
          sx={{
            width: "100%",
            position: "relative",
            alignItems: "center",
            //height: `calc(100vh - ${navbarHeight}px)`,
            height: { xs: "100vh", md: "100vh" },
            display: "flex",
            bgcolor: "red",
            flexDirection: "column",
          }}
        >
          <NewDownloadImage
            optionChosen={optionChosen}
            navbarHeight={navbarHeight}
          />
        </Box>

        <React.Suspense fallback={<div>Loading...</div>}>
          <Box
            sx={{
              height: { xs: "60vh", md: "50vh" },
              width: "100%",
              //bgcolor: "#20201f",
              background: "linear-gradient(to bottom, #20201f, black)",

              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              //alignItems: "center",
            }}
          >
            <Options
              OptionsToChoose={OptionsToChoose}
              optionChosen={optionChosen}
            />
          </Box>
        </React.Suspense>

        <React.Suspense fallback={<div>Loading...</div>}>
          <Box
            sx={{
              height: "100vh",
              //padding: "3rem 6rem",
              width: "100vw",
              //background: "url('/BusinessWallpaper.svg')",
              //backgroundImage: "url('/BusinessWallpaper.svg')",
              //backgroundRepeat: "no-repeat",
              //backgroundSize: "100%",
              //backgroundPosition: "bottom",
              display: { xs: "block", md: "flex" },
              //opacity: 0.5,
              flexDirection: "column",
              position: "relative",
              //padding: "2rem 4rem 2rem 4rem",
            }}
          >
            <Box
              sx={{
                height: { xs: "40%", md: "100%" },
                position: "relative",
              }}
            >
              <Image
                src="https://res.cloudinary.com/dzlhhijtz/image/upload/v1712344217/Stable%20Mockups/Main/LifeWallpaper_dys5ud.svg"
                alt="LifeWallpaper"
                fill
                load={() => "lazy"}
                style={{
                  objectFit: "cover",
                  objectPosition: "Top",
                  zIndex: -1,
                }}
              />
            </Box>
            <Box
              sx={{
                position: { xs: "relative", md: "absolute" },
                top: { md: 0 },
                bottom: { xs: "0", md: "0" },
                height: { xs: "60%", md: "40%" },
                width: "100%",
                bgcolor: { xs: "#20201F", md: "transparent" },
                display: { md: "block" },
              }}
            >
              <Life />
            </Box>{" "}
          </Box>
        </React.Suspense>

        <React.Suspense fallback={<div>Loading...</div>}>
          <Box
            sx={{
              height: { xs: "150vh", md: "100vh" },
              bgcolor: "#20201F",

              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <People />
          </Box>
        </React.Suspense>

        <React.Suspense fallback={<div>Loading...</div>}>
          <Box
            sx={{
              //minHeight: "100vh",
              padding: { md: "3rem 6rem" },
              background: "#202020",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <HowToUse />
          </Box>
        </React.Suspense>

        <Box
          sx={{
            height: { xs: "100vh", md: "100vh" },
            //padding: "3rem 6rem",
            width: "100vw",
            //background: "url('/BusinessWallpaper.svg')",
            //backgroundImage: "url('/BusinessWallpaper.svg')",
            //backgroundRepeat: "no-repeat",
            //backgroundSize: "100%",
            //backgroundPosition: "bottom",
            display: "flex",
            //opacity: 0.5,
            flexDirection: "column",
            position: "relative",
            //padding: "2rem 4rem 2rem 4rem",
          }}
        >
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
              top: { md: 0 },
              bottom: { xs: "0", md: "0" },
              height: { xs: "40%", md: "100%" },
              width: "100%",
              bgcolor: { /* xs: "#20201F" */ md: "transparent" },
              display: { md: "block" },
            }}
          >
            <Image
              src="https://res.cloudinary.com/dzlhhijtz/image/upload/v1712344451/Stable%20Mockups/Main/BusinessWallpaper_bdwosi.svg"
              alt="BusinessWallpaper"
              fill
              load={() => "lazy"}
              style={{
                objectFit: "cover",
                objectPosition: "bottom",
                zIndex: -1,
              }}
            />
          </Box>

          <Box
            sx={{
              height: { xs: "60%" },
            }}
          >
            <BusinessComp />
          </Box>
          {/* <Image
            src="/BusinessWallpaper.svg"
            alt="BusinessWallpaper"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "bottom",
              zIndex: -1,
            }}
          /> */}

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              bottom: 0,
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 4rem",
              background:
                "linear-gradient(93.25deg, #FFE6FB 34.35%, #D385D6 150.82%)",
              //position: "relative",
              height: "10%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "unset",
                fontSize: "1.5rem",
              }}
            >
              <Trans i18nKey="Business">
                {t("sponsorship")} <strong>Stable®?</strong>
              </Trans>
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "0",
                fontFamily: "unset",
                fontSize: "1.2rem",
                color: "black",
                bgcolor: "rgba(211, 133, 214, 1)",
                //fontWeight: "bold",
                "&:hover": {
                  cursor: "pointer",
                  bgcolor: "rgba(211, 133, 214, 0.8)",
                },
              }}
            >
              {t("button")}
            </Button>
          </Box>
        </Box>

        <Footer optionChosen={-1} />
      </Box>
    </>
  );
}
