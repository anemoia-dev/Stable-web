import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const BusinessComp = () => {
  const { t, i18n } = useTranslation("Business");
  return (
    <Box
      sx={{
        width: "100%",
        height: "90%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "50%",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          zIndex: 1,
          top: 30,
          padding: "1rem 5rem",
          right: 0,
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontFamily: "unset",
            fontSize: "3.5rem",
            fontWeight: "bold",
          }}
        >
          {t("title")}
        </Typography>

        <Typography
          sx={{
            color: "black",
            fontFamily: "unset",
            fontWeight: 300,
            fontSize: "2rem",
            textAlign: "right",
            borderBottom: "1px solid black",
          }}
        >
          {t("subtitle")}
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontFamily: "unset",
            fontWeight: 500,
            fontSize: "1.1rem",
            textAlign: "right",
          }}
        >
          {t("description")}
        </Typography>
      </Box>
    </Box>
  );
};

export default BusinessComp;
