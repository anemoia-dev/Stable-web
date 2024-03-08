import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
const People = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "2.5rem 3rem",
      }}
    >
      <p
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Personas
      </p>

      <Box
        color={"transparent"}
        sx={{
          //boxShadow: "0px 4px 20px 0px rgba(32, 32, 31, 0.2)",
          border: "1px solid white",
          padding: "2rem",
          marginTop: "4vh",
          backdropFilter: "blur(20px)",
          width: "80%",
          height: "75vh",
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "white",

            fontSize: "1.7rem",
            fontFamily: "unset",
            fontWeight: "500",
          }}
        >
          Una billetera virtual que convierte tus pesos a dólares.
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontFamily: "unset",
          }}
        >
          Tal vez habrás oído de las billeteras virtuales, a lo mejor ya hayas
          utilizado una para enviar y recibir dinero, pero hay algo que no has
          visto y que hasta ahora creías imposible: tener en tu celular la
          primera billetera virtual que convierte al instante tus pesos en
          dólares. Así es, y una vez en dólares, tu plata estará lista para
          disfrutarla en cualquier parte del mundo.
        </Typography>

        <Box
          sx={{
            bgcolor: "white",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Video
        </Box>
      </Box>
    </Box>
  );
};

export default People;
