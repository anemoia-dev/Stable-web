"use client";

import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

const FirstSection = () => {
  useEffect(() => {
    const navBarheight = document.getElementById("navBar").clientHeight;
    handleNavbarHeight(navBarheight);
  }, []);

  const [navbarHeight, setNavbarHeight] = useState(0);

  const handleNavbarHeight = (height) => {
    setNavbarHeight(height);
  };
  return (
    <Box sx={{ bgcolor: "red", height: `calc(100vh - ${navbarHeight}px)` }}>
      FirstSection
    </Box>
  );
};

export default FirstSection;
