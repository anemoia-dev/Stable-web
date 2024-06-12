"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Expanded from "./Expanded";
import Link from "next/link";
import Image from "next/image";

import { useTranslation } from "react-i18next";
const texts = [0, 1, 2, 3];
const HowToUse = () => {
  const { t, i18n } = useTranslation("HowToUse");

  return (
    <Box
      sx={{
        minHeight: { xs: "80vh", sm: "100%", md: "100%" },
        padding: { xs: "2rem 2rem" },
        display: "flex",
        position: "relative",
        flexDirection: { xs: "column", md: "column" },
        justifyContent: "center",
        marginTop: { /*  xs: "-10vh" */ sm: 0, md: 0 },
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
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.stablellc.stable&hl=es"
            }
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              src="https://res.cloudinary.com/dzlhhijtz/image/upload/v1712372198/Stable%20Mockups/Main/googleBlack_sztlre.svg"
              alt="Google Logo"
              width={172}
              height={50} // Se puede dejar undefined para mantener la proporción original de la imagen
            />
          </Link>

          <Link
            href={"https://apps.apple.com/co/app/stable/id6446915567"}
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              src="https://res.cloudinary.com/dzlhhijtz/image/upload/v1712372199/Stable%20Mockups/Main/appleblack_sbsiaj.svg"
              alt="Google Logo"
              width={172}
              height={50} // Se puede dejar undefined para mantener la proporción original de la imagen
            />
          </Link>
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
        {texts.map((el, id) => {
          return <Expanded id={el} key={id + id} />;
        })}
      </Box>
    </Box>
  );
};

export default HowToUse;
