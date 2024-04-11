import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const BusinessComp = () => {
  const { t, i18n } = useTranslation("Business");
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: { xs: "#20201F", md: "transparent" },
        position: "relative",
        borderBottom: { xs: "1px solid white", md: "none" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "50%",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          zIndex: 1,
          top: { xs: 0, md: 30 },
          padding: { xs: "1rem 1rem", md: "1rem 5rem" },
          right: 0,
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontFamily: "unset",
            fontSize: { xs: "30px", md: "3.5rem" },
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
            fontSize: { xs: "20px", md: "2rem" },
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
            fontWeight: { md: 500 },
            fontSize: { xs: "1rem", md: "1.1rem" },
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
          }}
        >
          <Box
            component={"img"}
            src={
              "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712372199/Stable%20Mockups/Main/appleblack_sbsiaj.svg"
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
    </Box>
  );
};

export default BusinessComp;
