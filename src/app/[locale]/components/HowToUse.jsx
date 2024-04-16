"use client";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Expanded from "./Expanded";

import { useTranslation } from "react-i18next";
const texts = [0, 1, 2, 3];
const HowToUse = () => {
  const { t, i18n } = useTranslation("HowToUse");

  return (
    <Box
      sx={{
        minHeight: { /* xs: "80vh" */ md: "90vh" },
        padding: { xs: "0rem 2rem" },
        display: "flex",
        flexDirection: { xs: "column", md: "column" },
        justifyContent: "center",
        marginTop: { /*  xs: "-10vh" */ md: 0 },
      }}
    >
      <Typography
        sx={{
          fontFamily: "unset",
          fontSize: { xs: "30px", md: "4rem" },
          fontWeight: "bold",
          color: "white",
        }}
      >
        {t("title")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "unset",
            width: { md: "30vw" },
            fontSize: "1.5rem",
            color: "white",
            display: "block",
            borderBottom: "1px solid white",
          }}
        >
          {t("subtitle")}
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "left",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <Box
            component={"img"}
            src={
              "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712372198/Stable%20Mockups/Main/googleBlack_sztlre.svg"
            }
            sx={{
              width: "172px",
            }}
          ></Box>
          <Box
            component={"img"}
            src={
              "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712372198/Stable%20Mockups/Main/googleBlack_sztlre.svg"
            }
            sx={{
              width: "158px",
            }}
          ></Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "2rem",
          //minHeight: "60vh",

          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {texts.map((el) => {
          return <Expanded id={el} />;
        })}
      </Box>
    </Box>
  );
};

export default HowToUse;
