import React from "react";
import { Box } from "@mui/material";
import { FaRobot } from "react-icons/fa";
import Paper from "@mui/material/Paper";

import "./TypingDots.css";

const TypingIndicator = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100px",
        mb: "0.5rem",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <FaRobot size="1.5rem" color="#20201F" />

      <Paper
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "1rem 1rem",
          backgroundColor: "#E5E5EA",
          width: "70%",
          height: "fit-content",
          position: "relative",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="typing">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Paper>
    </Box>
  );
};

export default TypingIndicator;
