"use client";
import React, { useEffect, useState, useRef } from "react";
import { Box, Button, Grow, Fade, IconButton } from "@mui/material";

import ChatWindow from "./ChatWindow";
import { FaRobot, FaTimes } from "react-icons/fa";

const ChatBotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    console.log("cargo");
  }, []);

  const handleButtonClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    const handleClick = (event) => {
      // Obtener las coordenadas del clic
      const x = event.clientX;
      const y = event.clientY;

      // Verificar si el clic ocurrió dentro del componente
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        if (isChatOpen) setIsChatOpen(false);
      }
    };

    // Agregar un event listener para clics en el documento
    document.addEventListener("click", handleClick);

    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isChatOpen]);
  const [icon, setIcon] = useState(<FaRobot size="2rem" color="#fff" />); // Initial icon

  useEffect(() => {
    setIcon(
      isChatOpen ? (
        <FaTimes size="2rem" color="#fff" />
      ) : (
        <FaRobot size="2rem" color="#fff" />
      )
    );
  }, [isChatOpen]); // Update icon on setOpen change

  return (
    <Box ref={componentRef}>
      <Box
        sx={{
          position: "absolute",

          bottom: "10vh",
          right: { xs: "1rem", md: "2rem" },
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            position: "fixed",
            //top: { xs: "82vh", sm: "88vh", md: "88vh" },
            bottom: { xs: "3vh", sm: "4vh" },
            right: { xs: "1rem", sm: "2rem", md: "2rem" },
            zIndex: 10,
          }}
        >
          <IconButton // Use IconButton for consistent button style
            variant="contained"
            onClick={handleButtonClick}
            sx={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              borderRadius: "50%",
              width: { xs: "3.5rem", sm: "4rem" },
              height: { xs: "3.5rem", sm: "4rem" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              transition: "all 0.3s ease-in-out", // Add transition for smooth icon change
              "&:hover": {
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                boxShadow: "0 5px 7px 2px rgba(255, 105, 135, .5)",
              },
            }}
          >
            {icon}
          </IconButton>
        </Box>
      </Box>
      <Fade in={isChatOpen}>
        <Box
          sx={{
            position: "fixed",
            padding: { xs: "1rem", sm: "0rem" },
            bottom: { xs: "5rem", sm: "6rem" },
            right: { xs: 0, sm: "2rem" },
            zIndex: 2,
            zIndex: 10,
            width: { xs: "100%", sm: "350px", md: "350px" },
          }}
        >
          <ChatWindow />
        </Box>
      </Fade>
    </Box>
  );
};

export default ChatBotButton;
