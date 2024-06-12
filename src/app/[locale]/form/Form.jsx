"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import HubSpotForm from "./HubspotForm";

const Form = () => {
  const { t, i18n } = useTranslation("Form");
  const lang = i18n.language;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        padding: { xs: "1rem 2rem", md: "3rem 10rem" },
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #20201F, black)",
      }}
    >
      <Typography
        sx={{
          width: "100%",
          color: "white",
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: "bold",
          marginTop: { md: "0rem" },
          fontFamily: "unset",
          textAlign: "center",
          lineHeight: { xs: "3rem" },
        }}
      >
        {t("title")}
      </Typography>

      <Typography
        sx={{
          color: "white",
          fontSize: "1rem",
          textAlign: "left",
          marginTop: "1rem",
          fontFamily: "unset",
        }}
      >
        {t("description")}
      </Typography>
      <HubSpotForm lang={lang} />
    </Box>
  );
};

export default Form;
