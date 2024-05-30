import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { FaRobot } from "react-icons/fa";

const IAMessage = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        mb: "0.5rem",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <FaRobot size="1.5rem" color="#20201F" />

      <Paper
        sx={{
          padding: "0.5rem 1rem",
          backgroundColor: "#E5E5EA",
          maxWidth: "70%",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "unset",
          }}
        >
          {text}
        </Typography>
      </Paper>
    </Box>
  );
};

export default IAMessage;
