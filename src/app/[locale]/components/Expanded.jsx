import React from "react";
import { useState } from "react";
import { Box, Typography, Button, CardMedia, Card } from "@mui/material";
import ReactPlayer from "react-player/lazy";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";

const Expanded = ({ text, id, background, video }) => {
  const { t, i18n } = useTranslation("HowToUse");
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const width0 = id === 0 && open ? "95%" : "90%";
  const width1 = id === 1 && open ? "95%" : "80%";
  const width2 = id === 2 && open ? "95%" : "70%";
  const width3 = id === 3 && open ? "95%" : "60%";

  const options = {
    width: 900,
    height: 325,
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  };
  let widths = {
    width0,
    width1,
    width2,
    width3,
  };

  const handleClose = (e) => {
    //e.preventDefault();

    setOpen(false);
  };
  return (
    <Box
      sx={{
        width: widths["width" + id],
        padding: "2rem",
        marginTop: id !== 0 ? "-10vh" : "0",
        height: open ? "75vh" : "20vh",
        transition: "all 0.3s ease-in-out",
        background: t(`op${id}.background`),
        position: "relative",
      }}
    >
      <Button
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: "0",
          top: 10,
          color: "black",
          fontSize: "1.3rem",
        }}
      >
        <CloseIcon
          sx={{ color: "black", fontSize: "2rem", fontFamily: "unset" }}
        />
      </Button>

      <Box
        onClick={handleClick}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "unset",
            fontSize: "1.5rem",
          }}
        >
          {/* {text} */}
          {t(`op${id}.text`)}
        </Typography>

        <Box
          sx={{
            display: open ? "block" : "none",
            fontFamily: "unset",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
              position: "relative",
            }}
          >
            <ReactPlayer
              url={t(`op${id}.video`)}
              width={"100%"}
              light={<img src="./whiteGif.gif" alt="Thumbnail" />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Expanded;
