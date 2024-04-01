"use client";
import React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const SocialMedia = ({ optionChosen }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        padding: { xs: "1rem 1rem", md: "1rem 3rem" },
        alignItems: "flex-end",
        gap: "1rem",
      }}
    >
      <Link
        href={"https://www.linkedin.com/company/stable%C2%AE"}
        target={"_blank"}
      >
        <LinkedInIcon
          sx={{
            fontSize: optionChosen !== -1 ? "1.8rem" : "2.2rem",
          }}
        />
      </Link>

      <Link href={"https://www.instagram.com/stablelatam/"} target={"_blank"}>
        <InstagramIcon
          sx={{
            fontSize: optionChosen !== -1 ? "1.8rem" : "2.2rem",
          }}
        />
      </Link>

      <Link href={"https://www.facebook.com/StableLatam"} target={"_blank"}>
        <FacebookOutlinedIcon
          sx={{
            fontSize: optionChosen !== -1 ? "1.8rem" : "2.2rem",
          }}
        />
      </Link>
    </Box>
  );
};

export default SocialMedia;
