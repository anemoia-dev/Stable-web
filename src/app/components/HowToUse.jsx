import { Box, Typography, Button } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Expanded from "./Expanded";
const texts = [
  {
    text: "Así de fácil es recargar.",
    background: "linear-gradient(93.79deg, #FFF7C6 20.9%, #EAB67D 129.9%)",
    video: "2NiqdSvKSMw",
  },
  {
    text: "Así de simple es enviar.",
    background: "linear-gradient(93.25deg, #FFE6FB 34.35%, #D385D6 150.82%)",
    video: "vNus1QbXgJE",
  },

  {
    text: "Así de sencillo es retirar.",
    background: "linear-gradient(93.19deg, #D0FFE6 29.09%, #7DCCA1 150.64%)",
    video: "2NiqdSvKSMw",
  },
  {
    text: "Así de sencillo es ver tus transacciones.",
    background: "linear-gradient(93.79deg, #FFF7C6 20.9%, #EAB67D 129.9%)",
    video: "zXeaAQ_MMNQ",
  },
];
const HowToUse = () => {
  /*  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  }; */

  return (
    <Box
      sx={{
        minHeight: "90vh",
      }}
    >
      <Typography
        sx={{
          fontFamily: "unset",
          fontSize: "4rem",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Cómo usar Stable®
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "unset",
            width: "30vw",
            fontSize: "1.5rem",
            color: "white",
            display: "block",
            borderBottom: "1px solid white",
          }}
        >
          Si ya descargaste Stable®, ahora <br /> aprende cómo funciona.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <Box
            component={"img"}
            src={"/googleBlack.svg"}
            sx={{
              width: "172px",
            }}
          ></Box>
          <Box
            component={"img"}
            src={"/appleBlack.svg"}
            sx={{
              width: "158px",
            }}
          ></Box>
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
          return (
            <Expanded
              text={el.text}
              id={id}
              background={el.background}
              video={el.video}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default HowToUse;
