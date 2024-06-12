"use client";
import React, { useState } from "react";
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
const NavBar = ({ color, cat }) => {
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

  return (
    <Box
      sx={{
        /* flexGrow: 1, */ width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      id="navBar"
    >
      {/*    <HideOnScroll> */}
      <AppBar
        sx={{
          position: {
            xs: "static",
            md: cat === "Global" ? "static" : "static",
          },
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor:
            !cat || cat === "Global"
              ? "#20201F"
              : cat === "Global"
              ? "white"
              : color,
          height: { xs: "10vh", md: "11vh" },
          boxShadow: "none",
          borderBottom: cat ? "1px solid rgba(178, 172, 172, 1)" : "none",
        }}
      >
        <Toolbar
          sx={{
            width: { xs: "100%", sm: "80%", md: "80%" },

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
                  !cat || cat === "Global"
                    ? "https://res.cloudinary.com/dzlhhijtz/image/upload/f_auto,q_auto/v1/Stable%20Mockups/Main/whiteGif_wjaxvz"
                    : "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712362833/Stable%20Mockups/Main/blackGif_d4zj72.gif"
                }
                alt="logo"
                width={170}
                height={99}
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
              padding: { xs: "0vw" },

              color: cat && cat !== "Global" ? "#202020" : "white",
            }}
          >
            <Link href={"form"}>
              <Typography
                sx={{
                  fontFamily: "unset",
                  display: { xs: "none", md: "flex" },
                  fontWeight: "600",
                }}
              >
                {t("navBarMain.join")}
              </Typography>
            </Link>
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
                },
              }}
            >
              <SocialMedia />
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
                color: cat && cat !== "Global" ? "#202020" : "white",
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
                    cat && cat !== "Global"
                      ? "#202020 !important"
                      : "white !important",
                },
              }}
            >
              <MenuItem value={"en"}>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    fontSize: {
                      xs: "1.2rem",
                      sm: "1.3rem",
                      md: "1rem",
                    },
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
                    fontSize: {
                      xs: "1.2rem",
                      sm: "1.3rem",
                      md: "1rem",
                    },
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
      {/*     </HideOnScroll> */}
    </Box>
  );
};

export default NavBar;
