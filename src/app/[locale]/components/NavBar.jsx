"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import BurgerButton from "./BurgerButton";
import SocialMedia from "./SocialMedia";
import Image from "next/image";
import {
  AppBar,
  MenuItem,
  Box,
  Select,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "@/app/i18nConfig";

import Container from "@mui/material/Container";
import { useTranslation } from "next-i18next";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
  const { t, i18n } = useTranslation();
  const { children, window } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const NavBar = ({
  onHeightChange,
  OptionsToChoose,
  color,
  optionChosen,
  cat,
}) => {
  const languages = {
    en: "English",
    es: "Español",
  };

  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [lang, setLanguage] = useState(i18n.language);
  const handleChange = React.useCallback(
    (e) => {
      const newLocale = e;
      setLanguage(newLocale);

      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = "; expires=" + date.toUTCString();
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

      if (currentLocale === i18nConfig.defaultLocale) {
        router.push("/" + newLocale + currentPathname);
      } else {
        router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );
      }

      router.refresh();
    },
    [currentLocale, currentPathname, router]
  );

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);

    const newLocale = e.target.value;

    handleChange(newLocale);
  };

  useEffect(() => {
    const navBarheight = document.getElementById("navBar").clientHeight;
    onHeightChange(navBarheight);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }} id="navBar">
      {/* <HideOnScroll> */}
      <AppBar
        // Styling the app bar
        //position={cat !== "Global" ? "fixed" : "fixed"}
        sx={{
          position: {
            xs: "fixed",
            md: cat !== "Global" ? "static" : "static",
          },
          width: "100vw",
          display: "flex",
          alignItems: "center",
          backgroundColor: color ? color : " #d7d7d7",
          /* backgroundImage:
              optionChosen === 0 &&
              "linear-gradient(147deg, #353535 0%,  #d7d7d7  74%)", */
          height: { xs: "12.5vh", md: "11vh" },
          boxShadow: "none",
          borderBottom:
            color !== "#202020" ? "1px solid rgba(178, 172, 172, 1)" : "none",
        }}
      >
        {/* //background-image: linear-gradient(147deg, #d7d7d7 0%, #353535 74%); */}
        <Toolbar
          // Styling the toolbar
          sx={{
            width: { xs: "100%", sm: "80%", md: "80%" },
            //height: "10vh",
            backgroundColor: color,
            gap: { sm: "1rem" },
            padding: { xs: "0 2rem", sm: 0 },
            display: "flex",
            justifyContent: {
              xs: "space-between",
              sm: "space-around",
              md: "space-between",
            },
          }}
        >
          {/* GIF Component */}
          <Link href="/">
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: {
                  xs: "8rem",
                  md: "120px",
                },
              }}
            >
              <Image
                src={
                  optionChosen === -1
                    ? "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712362743/Stable%20Mockups/Main/whiteGif_wjaxvz.gif"
                    : "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712362833/Stable%20Mockups/Main/blackGif_d4zj72.gif"
                }
                alt="logo"
                width={140}
                height={79}
                priority
                style={{
                  backgroundColor: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </Box>
          </Link>

          <Box
            // Creating a box to hold multiple items
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: { sm: "1rem" },
              height: { xs: "100%", md: "100%" },
              padding: { xs: "2vw" },

              color: color !== "#202020" ? "#202020" : "white",
            }}
          >
            <Typography
              sx={{
                fontFamily: "unset",
                display: { xs: "none", md: "flex" },
              }}
            >
              {t("navBarMain.form")}
            </Typography>

            <Typography
              sx={{
                fontFamily: "unset",
                display: { xs: "none", md: "flex" },
              }}
            >
              {t("navBarMain.centerHelp")}
            </Typography>

            {/* 
            <Button
              sx={{
                bgcolor: "transparent",
                color: "#FFD1FF",
                display: "none",

                textTransform: "none",
                display: { xs: "none", md: "flex" },
              }}
            >
              <p
                style={{
                  fontWeight: 600,
                }}
              >
                Cerrar Sesión
              </p>
            </Button> */}

            <Box
              sx={{
                display: optionChosen !== -1 ? "flex" : "none",
              }}
            >
              <SocialMedia optionChosen={optionChosen} />
            </Box>

            <Select
              // Creating a language selection dropdown
              value={lang}
              onChange={(e) => handleChange(e.target.value)}
              label={"language"}
              //displayEmpty
              size="small"
              sx={{
                border: "none",
                borderRadius: 0,
                color: color !== "#202020" ? "#202020" : "white",
                fontFamily: "unset",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&:hover": {
                  bgcolor: "gray",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  borderRadius: "0",
                },
                ".MuiSvgIcon-root ": {
                  fill:
                    color !== "#202020"
                      ? "#202020 !important"
                      : "white !important",
                },
              }}
            >
              <MenuItem value={"en"}>
                <Typography
                  sx={{
                    fontFamily: "unset",
                  }}
                >
                  {" "}
                  English{" "}
                </Typography>
              </MenuItem>

              <MenuItem value={"es"}>
                <Typography
                  sx={{
                    fontFamily: "unset",
                  }}
                >
                  Español
                </Typography>
              </MenuItem>
            </Select>

            <BurgerButton />
          </Box>
        </Toolbar>
      </AppBar>
      {/* </HideOnScroll> */}
    </Box>
  );
};

export default NavBar;
