"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import { Box, Typography, Button } from "@mui/material";
import SocialMedia from "./components/SocialMedia";
import DownloadMain from "./components/DownloadMain";
import Options from "./components/Options";
import Life from "./components/Life";
import People from "./components/People";
import { useState, useEffect } from "react";
import HowToUse from "./components/HowToUse";
import { Business } from "@mui/icons-material";
import BusinessComp from "./components/BusinessComp";
import Footer from "./components/Footer";
import Selected from "./components/Selected";
import textList from "../files/Selected.js";
const colors = [" #a9cce3", "#af7ac5", "#273746"];
const wals = ["./wal1.svg", "./wal2.svg", "./wal3.svg"];

export default function Home() {
  //console.log(dictionary)

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
  }, [backgroundChanger]);

  const [navbarHeight, setNavbarHeight] = useState(0);

  const handleNavbarHeight = (height) => {
    setNavbarHeight(height);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar
        onHeightChange={handleNavbarHeight}
        OptionsToChoose={OptionsToChoose}
        color={
          optionChosen !== -1
            ? textList.Texts[optionChosen].secondColor
            : "#202020"
        }
      />

      {optionChosen !== -1 ? (
        <Box
          sx={{
            height: `calc(100% - ${navbarHeight}px)`,
          }}
        >
          <Selected
            navbarHeight={navbarHeight}
            OptionsToChoose={OptionsToChoose}
            optionChosen={optionChosen}
            info={textList.Texts[optionChosen]}
          />
          <Footer />
        </Box>
      ) : (
        <Box
          sx={{
            display: "block",
            flexDirection: "column",
            backgroundImage: `url(${image})`,
            //background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}.svg')`,
            bgcolor: "#202020",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundPosition: "top",
            width: "100%",
            height: `calc(100% - ${navbarHeight}px)`,
            transition: "all 1s ease-in-out",
          }}
        >
          <Box
            sx={{
              bgcolor: "",
              height: "100%",
              width: "100%",
            }}
          >
            <SocialMedia />
            <Box
              sx={{
                transition: "all 2s fade-in",
                height: "35vh",
              }}
            >
              <DownloadMain index={backgroundChanger} />
            </Box>
          </Box>

          <Box
            sx={{
              height: "50%",
              width: "100%",
              bgcolor: "#20201f",
            }}
          >
            <Options
              OptionsToChoose={OptionsToChoose}
              optionChosen={optionChosen}
            />
          </Box>

          <Box
            sx={{
              height: "100vh",
              backgroundImage: "url('/LifeWallpaper.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              //position: "relative",
            }}
          >
            <Life />
          </Box>

          <Box
            sx={{
              height: "100vh",

              bgcolor: "#20201F",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <People />
          </Box>

          <Box
            sx={{
              //minHeight: "100vh",
              padding: "3rem 6rem",
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

          <Box
            sx={{
              height: "100vh",
              //padding: "3rem 6rem",
              width: "100vw",
              background: " url('/BusinessWallpaper.svg')",
              //backgroundImage: "url('/BusinessWallpaper.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundPosition: "bottom",
              display: "flex",
              //opacity: 0.5,
              flexDirection: "column",

              //padding: "2rem 4rem 2rem 4rem",
            }}
          >
            <BusinessComp />

            <Box
              sx={{
                display: "flex",
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
                ¿Quieres que tu marca esté en <b>Stable® </b>?
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
                Haz click aqui
              </Button>
            </Box>
          </Box>

          <Footer />
        </Box>
      )}
    </Box>
  );
}
