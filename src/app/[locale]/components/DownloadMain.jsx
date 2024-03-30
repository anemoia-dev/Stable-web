import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
/* import * as S from "../../styles/carrusel.module.css"; */

const texts = [
  "Eres más libre cuando  puedes disfrutar tu dinero en todo el mundo.",
  "Una experiencia única se vive intensamente y se recuerda siempre.",
  "Conoce tu tarjeta de entrada al mundo entero.",
];
const DownloadMain = ({ index }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  /*  useEffect(() => {
    const setSlideInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 5000);

    return () => clearInterval(setSlideInterval);
  }, [currentSlide]); */

  return (
    <Box
      key={index}
      sx={{
        bgcolor: "red",
        padding: "0 3rem",
        width: "60vw",
        //height: "70vh",
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem",
        bottom: "10vh",
      }}
    >
      <Box
        key={index}
        sx={{
          //height: "100%",
          fontWeight: "bold",
          color: "white",
          paddingTop: "0vh",
          //opacity: 1,

          //transition: "text 3s fade-in",
          position: "absolute",
          bottom: "11vh",
        }}
      >
        {texts.map((el, id) => {
          return (
            <Typography
              key={id + el}
              className={S.fadein}
              sx={{
                fontFamily: "unset",
                fontSize: "3.5rem",
                fontWeight: "bold",
                color: "white",
                lineHeight: 1.1,
                display: id === index ? "inline" : "none",
              }}
            >
              {el}
            </Typography>
          );
        })}
        {/*  */}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          gap: "1rem",
          position: "absolute",
          bottom: "0vh",
        }}
      >
        <Box
          component={"img"}
          src={"/google-us.svg"}
          sx={{
            width: "220px",
          }}
        ></Box>
        <Box
          component={"img"}
          src={"/apple.svg"}
          sx={{
            width: "210px",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default DownloadMain;
