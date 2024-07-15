import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import CookiesList from "./CookiesList";

const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "block",
      }}
    >
      <NavBar />
      <CookiesList />

      <Footer />
    </Box>
  );
};

export default Layout;
