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
} from "@mui/material";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "@/app/i18nConfig";

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
  color,

  cat,
}) => {
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

  /*  useEffect(() => {
    const navBarheight = document.getElementById("navBar").clientHeight;
    onHeightChange(navBarheight);
  }, []); */

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }} id="navBar">
      <HideOnScroll>
        <AppBar
          sx={{
            position: {
              xs: "fixed",
              md: "fixed",
            },
            width: "100vw",
            display: "flex",
            alignItems: "center",
            backgroundColor: !cat ? "#20201F" : color,
            /* backgroundImage:
              optionChosen === 0 &&
              "linear-gradient(147deg, #353535 0%,  #d7d7d7  74%)", */
            height: { xs: "10vh", md: "11vh" },
            boxShadow: "none",
            borderBottom: cat ? "1px solid rgba(178, 172, 172, 1)" : "none",
          }}
        >
          <Toolbar
            sx={{
              width: { xs: "100%", sm: "80%", md: "80%" },
              //height: "10vh",
              backgroundColor: !cat && "#20201F",
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
                    !cat
                      ? "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712362743/Stable%20Mockups/Main/whiteGif_wjaxvz.gif"
                      : "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712362833/Stable%20Mockups/Main/blackGif_d4zj72.gif"
                  }
                  alt="logo"
                  width={140}
                  height={79}
                  priority
                  style={{
                    backgroundColor: "transparent",
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

                color: cat ? "#202020" : "white",
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

              <Link
                href={"https://41506338.hs-sites.com/es/centro-de-ayuda"}
                target="_blank"
              >
                <Typography
                  sx={{
                    fontFamily: "unset",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  {t("navBarMain.centerHelp")}
                </Typography>
              </Link>

              <Box
                sx={{
                  display: {
                    xs: "none",
                    /*    md: optionChosen !== -1 ? "flex" : "none", */
                  },
                }}
              >
                <SocialMedia /* optionChosen={optionChosen} */ />
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
                  color: cat ? "#202020" : "white",
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
                    fill: cat ? "#202020 !important" : "white !important",
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

              <BurgerButton cat={cat} />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
};

export default NavBar;
