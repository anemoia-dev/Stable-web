import React from "react";
import Box from "@mui/material/Box";
import { Typography, Card } from "@mui/material";
import ReactPlayer from "react-player/lazy";
import { useTranslation } from "next-i18next";
const People = () => {
  const { t, i18n } = useTranslation("People");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "2.5rem 3rem",
        backgroundColor: "rgba(0,0,0,.5)",
        color: "#fff",
        height: "100vh",
        position: "relative",
      }}
    >
      <p
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {t("title")}
      </p>

      <Card
        sx={{
          //boxShadow: "0px 4px 20px 0px rgba(32, 32, 31, 0.2)",
          border: "1px solid white",
          bgcolor: "rgba(0,0,0,.5)",
          padding: "2rem",
          marginTop: "3vh",
          width: "80%",
          height: "75%",
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
              color: "white",
              fontSize: "1.7rem",
              fontFamily: "unset",
              fontWeight: "500",
              position: "relative",
            }}
          >
            {t("subtitle")}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "unset",
            }}
          >
            {t("description")}
          </Typography>
        </Box>

        <ReactPlayer
          light={<img src="./whiteGif.gif" alt="Thumbnail" />}
          url={"https://www.youtube.com/watch?v=dZE1DNDgHxU"}
          width={"100%"}
          height={"110%"}
        />
      </Card>
    </Box>
  );
};

export default People;
