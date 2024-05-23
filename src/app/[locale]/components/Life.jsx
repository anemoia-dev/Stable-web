"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
const Life = () => {
  const { t, i18n } = useTranslation("Options");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: { md: "right" },
        alignItems: { md: "flex-end" },
        position: { xs: "relative", md: "absolute" },
        top: { md: 0 },
        right: { md: 0 },
        bottom: { xs: 0 },
        padding: { xs: "2rem 2rem", md: "3.5rem 6rem" },
        width: { xs: "100%", md: "60%" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "30px", sm: "3.5rem", md: "5.5rem" },
          fontWeight: "bold",
          color: { xs: "white", md: "black" },
          textAlign: { xs: "right", md: "right" },
        }}
      >
        {" "}
        LIFE{" "}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "20px", sm: "2rem", md: "2rem" },
          textAlign: { xs: "right", md: "right" },
          color: { xs: "white", md: "black" },
          fontFamily: "unset",
          textDecoration: "underline",
        }}
      >
        {" "}
        {t("Title")}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "1.4rem", md: "1.4rem" },
          fontFamily: "unset",
          lineHeight: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          textAlign: { xs: "right", md: "right" },
          marginTop: "2rem",
          color: { xs: "white", md: "black" },
        }}
      >
        {t("description")}
      </Typography>

      <Box
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "row", md: "row" },
          justifyContent: "center",
          gap: "1rem",
          marginTop: { xs: "2rem", sm: "1rem" },
        }}
      >
        <Link
          href={
            "https://play.google.com/store/apps/details?id=com.stablellc.stable&hl=es"
          }
          target={"_blank"}
          rel="noreferrer"
        >
          <Box
            component={"img"}
            src={
              "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712372198/Stable%20Mockups/Main/googleBlack_sztlre.svg"
            }
            sx={{
              width: { xs: "142px", sm: "202px", md: "172px" },
            }}
          ></Box>
        </Link>

        <Link
          href={"https://apps.apple.com/co/app/stable/id6446915567"}
          target={"_blank"}
          rel="noreferrer"
        >
          <Box
            component={"img"}
            src={
              "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712372199/Stable%20Mockups/Main/appleblack_sbsiaj.svg"
            }
            sx={{
              width: { xs: "132px", sm: "182px", md: "158px" },
            }}
          ></Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Life;
