import { Box, Typography } from "@mui/material";
import React from "react";

const Life = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "right",
        alignItems: "flex-end",
        padding: "3.5rem 6rem",
      }}
    >
      <Typography
        sx={{
          fontSize: "5.5rem",
          fontWeight: "bold",
        }}
      >
        {" "}
        LIFE{" "}
      </Typography>
      <p
        style={{
          fontSize: "2rem",
          textDecoration: "underline",
        }}
      >
        {" "}
        Disfrutar el mundo entero es posible
      </p>

      <p
        style={{
          fontSize: "1.4rem",
          lineHeight: "2.5rem",
          textAlign: "right",
          marginTop: "2rem",
          width: "50%",
        }}
      >
        La vida es una colección de experiencias, pero sólo algunas llegan a ser
        inolvidables; son las que queremos ofrecerte con nuestros aliados y las
        que encontrarás en Stable®.
      </p>

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
          src={"/appleblack.svg"}
          sx={{
            width: "158px",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Life;
