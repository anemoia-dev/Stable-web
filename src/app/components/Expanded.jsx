import React from "react";
import { useState } from "react";
import { Box, Typography, Button, CardMedia, Card } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import YouTube from "react-youtube";
const Expanded = ({ text, id, background, video }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
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
    e.preventDefault();
    setOpen(false);
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        width: widths["width" + id],
        padding: "2rem",
        marginTop: id !== 0 ? "-10vh" : "0",
        height: open ? "70vh" : "20vh",
        transition: "all 0.3s ease-in-out",
        background: background,
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontFamily: "unset",
            fontSize: "1.5rem",
          }}
        >
          {text}
        </Typography>

        <Button onClick={handleClose}>
          <CloseIcon
            sx={{ color: "black", fontSize: "2rem", fontFamily: "unset" }}
          />
        </Button>
      </Box>

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
          <YouTube videoId={video} opts={options} />
        </Box>
      </Box>
    </Box>
  );
};

export default Expanded;
