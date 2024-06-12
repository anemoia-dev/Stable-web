import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const UserMessage = ({ text }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "0rem" }}>
      <Paper
        sx={{
          padding: "0.5rem 1rem",
          backgroundColor: "#20201F",
          maxWidth: "70%",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "unset",
            color: "white",
          }}
        >
          {text}
        </Typography>
      </Paper>
    </Box>
  );
};

export default UserMessage;
