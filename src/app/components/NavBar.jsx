"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import BurgerButton from "./BurgerButton";
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

import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
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
const NavBar = ({ onHeightChange, OptionsToChoose, color }) => {
  const languages = {
    en: "English",
    es: "Español",
  };

  const [lang, setLanguage] = useState("es");
  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  useEffect(() => {
    const navBarheight = document.getElementById("navBar").clientHeight;
    onHeightChange(navBarheight);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} id="navBar">
      <HideOnScroll>
        <AppBar
          // Styling the app bar
          //position="static"
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: color ? color : "red",
            height: "11vh",
            boxShadow: "none",
            borderBottom:
              color !== "#202020" ? "1px solid rgba(178, 172, 172, 1)" : "none",
          }}
        >
          <Toolbar
            // Styling the toolbar
            sx={{
              width: { xs: "100%", sm: "80%", md: "80%" },
              //height: "10vh",
              backgroundColor: color,
              padding: { xs: "0 10rem", sm: 0 },
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "space-around",
                md: "space-between",
              },
            }}
          >
            {/* GIF Component */}
            <Link href="/">
              <Box
                // Adding a link with an image
                component={"img"}
                onClick={() => OptionsToChoose(-1)}
                src={color === "#202020" ? "./whiteGif.gif" : "./blackGif.gif"}
                sx={{
                  width: {
                    xs: "8rem",
                    md: "120px",
                  },
                  backgroundColor: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </Link>

            <Box
              // Creating a box to hold multiple items
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: { sm: "1rem" },
                padding: { xs: "2%" },
                color: color !== "#202020" ? "#202020" : "white",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "unset",
                  display: { xs: "none", md: "flex" },
                }}
              >
                Formulario
              </Typography>

              <Typography
                sx={{
                  fontFamily: "unset",
                  display: { xs: "none", md: "flex" },
                }}
              >
                Centro de ayuda
              </Typography>

              <Select
                // Creating a language selection dropdown
                value={lang}
                onChange={handleChangeLanguage}
                label={"language"}
                displayEmpty
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
                <MenuItem value={"es"}>
                  <p> Español </p>
                </MenuItem>

                <MenuItem value={"en"}>
                  <p> English </p>
                </MenuItem>
              </Select>
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

              <BurgerButton />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
};

export default NavBar;
