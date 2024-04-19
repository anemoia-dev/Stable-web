"use client";
import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ReactPlayer from "react-player/lazy";
import { useTranslation } from "next-i18next";
import Responsive from "./Carousel";
const People = () => {
  const { t, i18n } = useTranslation("People");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: { xs: "2rem 1.5rem", md: "2.5rem 3rem" },
        backgroundColor: { xs: "rgba(255, 230, 251, 1)", md: "rgba(0,0,0,.5)" },
        color: "#fff",
        minHeight: { xs: "110vh", md: "100vh" },
        position: "relative",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "4rem" },
          fontFamily: "unset",
          fontWeight: "bold",
          color: { xs: "black", md: "white" },
        }}
      >
        {t("title")}
      </Typography>

      <Box
        sx={{
          border: { xs: "none" /* md: "1px solid white" */ },
          bgcolor: { xs: "transparent", md: "rgba(0,0,0,.5)" },
          padding: "2rem",
          marginTop: { md: "3vh" },
          width: { xs: "100%", md: "80%" },
          height: { md: "80%" },
          display: "flex",

          gap: "1rem",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: { xs: "black", md: "white" },
              fontSize: { xs: "20px", md: "1.7rem" },
              fontFamily: "unset",
              fontWeight: "500",
              position: "relative",
            }}
          >
            {t("subtitle")}
          </Typography>
          <Typography
            sx={{
              color: { xs: "black", md: "white" },
              fontFamily: "unset",
            }}
          >
            {t("description")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=dZE1DNDgHxU"}
            width={"100%"}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          height: { xs: "55vh", md: "100vh" },
          width: "80%",
          bgcolor: "white",
        }}
      >
        {" "}
        <Responsive />
      </Box>
    </Box>
  );
};

export default People;
