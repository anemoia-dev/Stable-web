import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Life = () => {
  const { t, i18n } = useTranslation("Options");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: { md: "right" },

        //height: { xs: "60%" },
        alignItems: { md: "flex-end" },
        position: { xs: "relative", md: "absolute" },
        //bgcolor: { xs: "#20201F", md: "transparent" },
        top: { md: 0 },
        right: { md: 0 },
        bottom: { xs: 0 },
        padding: { xs: "1rem 1rem", md: "3.5rem 6rem" },
        width: { xs: "100%", md: "60%" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "5.5rem" },
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
          fontSize: { xs: "20px", md: "2rem" },
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
          fontSize: { xs: "14px", md: "1.4rem" },
          fontFamily: "unset",
          lineHeight: { xs: "1.5rem", md: "2.5rem" },
          textAlign: { xs: "right", md: "right" },
          marginTop: "2rem",
          color: { xs: "white", md: "black" },
          //width: { xs: "100%", md: "50%" },
        }}
      >
        {t("description")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          width: { xs: "100%", md: "50%" },

          justifyContent: { xs: "center", md: "right" },
          alignItems: "center",
          gap: "1rem",
          marginTop: "2rem",
          position: "relative",
        }}
      >
        <Box
          component={"img"}
          src={
            "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712372198/Stable%20Mockups/Main/googleBlack_sztlre.svg"
          }
          sx={{
            width: { xs: "142px", md: "172px" },
          }}
        ></Box>
        <Box
          component={"img"}
          src={
            "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712372199/Stable%20Mockups/Main/appleblack_sbsiaj.svg"
          }
          sx={{
            width: { xs: "132px", md: "158px" },
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Life;
