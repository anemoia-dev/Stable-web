import React from "react";
import Box from "@mui/material/Box";
import { Typography, Card } from "@mui/material";
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
        padding: { xs: "2rem 0rem", md: "2.5rem 3rem" },
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
          //boxShadow: "0px 4px 20px 0px rgba(32, 32, 31, 0.2)",
          border: { xs: "none", md: "1px solid white" },
          bgcolor: { xs: "transparent", md: "rgba(0,0,0,.5)" },
          padding: "2rem",
          marginTop: { md: "3vh" },
          width: { xs: "100%", md: "80%" },
          height: { md: "75%" },
          display: "flex",
          //bgcolor: "white",
          //color: "white",
          //opacity: 0.2,
          gap: "1rem",
          flexDirection: "column",

          //boxShadow: "0px 4px 20px rgba(32, 32, 31, 0.2)",
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
            light={
              <img
                src="https://res.cloudinary.com/dzlhhijtz/image/upload/v1712362743/Stable%20Mockups/Main/whiteGif_wjaxvz.gif"
                alt="Thumbnail"
                width={{ xs: "50%", md: "100%" }}
              />
            }
            url={"https://www.youtube.com/watch?v=dZE1DNDgHxU"}
            width={"100%"}
            height={"110%"}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          height: { xs: "50vh", md: "100vh" },
          width: "80%",
          bgcolor: "white",
          //marginTop: "4vh",
        }}
      >
        {" "}
        <Responsive />
      </Box>
    </Box>
  );
};

export default People;
