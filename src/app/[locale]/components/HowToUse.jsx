import { Box, Typography, Button } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Expanded from "./Expanded";
import parse from "html-react-parser";

import { useTranslation } from "react-i18next";
const texts = [0, 1, 2, 3];
const HowToUse = () => {
  const { t, i18n } = useTranslation("HowToUse");
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
        {t("title")}
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
          {t("subtitle")}
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
            src={"/appleblack.svg"}
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
        {texts.map((el) => {
          return <Expanded id={el} />;
        })}
      </Box>
    </Box>
  );
};

export default HowToUse;
