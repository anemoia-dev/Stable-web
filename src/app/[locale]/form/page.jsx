import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Form from "./Form";
import { Box } from "@mui/material";

const page = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <Form />
        <Footer />
      </Box>
    </>
  );
};

export default page;
