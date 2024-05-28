"use client";
import React from "react";
import Flag from "react-world-flags";
import { validateInput } from "../../../../utils/validators";
import {
  Box,
  Typography,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  Button,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import Link from "next/link";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import LinearProgress from "@mui/material/LinearProgress";
import { redirect } from "next/navigation";
import { Router } from "next/router";
import HubSpotForm from "../ensayo/Form";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);
  const [fadingOut, setFadingOut] = React.useState(false);

  React.useEffect(() => {
    const duration = 5000; // Duration for progress to reach 100% in milliseconds
    const interval = 50; // Update interval in milliseconds
    const increment = 100 / (duration / interval); // Progress increment per interval

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(oldProgress + increment, 100);
        if (newProgress === 100) {
          setFadingOut(true);
        }
        return newProgress;
      });
    }, interval);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      setProgress(100); // Ensure progress reaches 100%
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        position: "absolute",
        top: "0vh",
        opacity: fadingOut ? 0 : 1,
        transition: fadingOut ? "opacity 1s ease-out" : "none",
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: "2px",
          bgcolor: "gray",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "rgba(125, 204, 161, 1)",
          },
        }}
      />
    </Box>
  );
}
const page = () => {
  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          position: "relative",
          width: "100vw",
          padding: { xs: "1rem 2rem", md: "0rem 10rem" },
          background: "linear-gradient(to bottom, #20201F, black)",
        }}
      >
        <LinearDeterminate />
        <Button
          onClick={(e) => {
            e.preventDefault();
            setSubmit(false);
            redirect("/");
          }}
          sx={{
            position: "absolute",
            top: "0rem",
            right: "10vw",
            fontFamily: "unset",
            fontSize: "1.5rem",
            color: "white",
            "&:hover": {
              color: "white",
            },
            color: "rgba(125, 204, 161, 1)",
          }}
        >
          X
        </Button>
        <CelebrationOutlinedIcon
          sx={{
            color: "rgba(125, 204, 161, 1)",
            fontSize: "10rem",
          }}
        />
        <Typography
          sx={{
            fontSize: "2rem",
            fontFamily: "unset",
            fontWeight: "bold",
            color: "white",
            marginTop: "1rem",
          }}
        >
          ¡Gracias por unirte a Stable®!
        </Typography>

        <Typography
          sx={{
            fontSize: "1.5rem",
            fontFamily: "unset",
            textAlign: "center",
            color: "white",
            marginTop: "1rem",
          }}
        >
          <b>Te mantendremos informado</b> con nuestras últimas novedades y
          lanzamientos.{" "}
          <Typography
            component="span"
            sx={{
              color: "rgba(125, 204, 161, 1)",
              fontWeight: "bold",
              fontFamily: "unset",
              fontSize: "1.5rem",
            }}
          >
            ¡Cambia lo imposible!
          </Typography>
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
};
export default page;
