"use client";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { sendGTMEvent } from "@next/third-parties/google";

const BusinessComp = () => {
  const handleClick = (e) => {
    sendGTMEvent({
      event: `trigger_business`,
    });
  };
  const { t, i18n } = useTranslation("Business");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "70vh", sm: "70vh", md: "100%" },
          bgcolor: { xs: "#20201F", md: "transparent" },
          position: "relative",
          borderBottom: { xs: "1px solid white", md: "none" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            minHeight: { xs: "60vh", sm: "50%", md: "40%" },
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            zIndex: 1,
            top: { xs: 0, sm: 0, md: 30 },
            padding: { xs: "2rem 2rem", sm: "2rem 4.5rem", md: "1rem 5rem" },
            right: 0,
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontFamily: "unset",
              fontSize: { xs: "30px", sm: "3.5rem", md: "3.5rem" },
              fontWeight: "bold",
              color: { xs: "white", md: "black" },
            }}
          >
            {t("title")}
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontFamily: "unset",
              fontWeight: 300,
              fontSize: { xs: "20px", sm: "1.4rem", md: "2rem" },
              textAlign: "right",
              borderBottom: { xs: "1px solid white", md: "1px solid black" },
              color: { xs: "white", md: "black" },
            }}
          >
            {t("subtitle")}
          </Typography>
          <Typography
            sx={{
              marginTop: { xs: "2rem" },
              color: { xs: "white", md: "black" },
              fontFamily: "unset",
              fontWeight: { sm: 300, md: 500 },
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.1rem" },
              textAlign: "right",
            }}
          >
            {t("description")}
          </Typography>{" "}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              width: { xs: "100%", md: "50%" },
              justifyContent: { xs: "center", md: "right" },
              alignItems: "center",
              gap: "1rem",
              marginTop: "2rem",
              paddingBottom: { xs: "2rem", md: "0" },
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
      </Box>

      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "flex" },
          position: "absolute",
          bottom: 0,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { sm: "0 3rem", md: "0 4rem" },
          marginTop: { sm: "2rem", md: "0rem" },
          background:
            "linear-gradient(93.25deg, #FFE6FB 34.35%, #D385D6 150.82%)",
          //position: "relative",
          height: "10%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "unset",
            fontSize: "1.5rem",
          }}
        >
          <Trans i18nKey="Business">
            {t("sponsorship")} <strong>Stable®?</strong>
          </Trans>
        </Typography>
        <Link
          href={"https://survey.hsforms.com/1VZtL1JFRSQaqg7amO90qkAopmhu"}
          target={"_blank"}
        >
          <Button
            onClick={handleClick}
            sx={{
              textTransform: "none",
              borderRadius: "0",
              fontFamily: "unset",
              fontSize: "1.2rem",
              color: "black",
              bgcolor: "rgba(211, 133, 214, 1)",
              //fontWeight: "bold",
              "&:hover": {
                cursor: "pointer",
                bgcolor: "rgba(211, 133, 214, 0.8)",
              },
            }}
          >
            {t("button")}
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default BusinessComp;
