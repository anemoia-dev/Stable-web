"use client"; //
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Box } from "@mui/material";
import Selected from "./Selected";
import { useTranslation } from "react-i18next";
import * as textList from "../../../files/Selected.json";
import Footer from "../components/Footer";
const layout = (props) => {
  const { t, i18n } = useTranslation("Selected");

  const [navbarHeight, setNavbarHeight] = useState(0);
  let category = props.params.category;

  let info = textList.List.filter(
    (el) => el.title.toLowerCase() === category.toLowerCase()
  );
  info = info[0];
  const handleNavbarHeight = (height) => {
    setNavbarHeight(height);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: "110vh", md: "100vh" },
        width: "100vw",
        // overflow: "hidden",
      }}
    >
      <NavBar
        onHeightChange={handleNavbarHeight}
        cat={category}
        color={
          category !== "Global" ? t(`${category}.secondColor`) : "transparent"
        }
      />

      <Selected navbarHeight={navbarHeight} info={info} cat={category} />

      <Footer />
    </Box>
  );
};
export default layout;
