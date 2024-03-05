import { Box, Typography } from "@mui/material";
import React from "react";

const BusinessComp = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "50%",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          zIndex: 1,
          bottom: 0,
          padding: "0 6rem",
          right: 0,
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontFamily: "unset",
            fontSize: "3.5rem",
            fontWeight: "bold",
          }}
        >
          Negocios
        </Typography>

        <Typography
          sx={{
            color: "black",
            fontFamily: "unset",
            fontWeight: 300,
            fontSize: "2rem",
            textAlign: "right",
            borderBottom: "1px solid black",
          }}
        >
          ¿Emprendedor, dueño de una PYME o un gran empresario?
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontFamily: "unset",
            fontWeight: 500,
            fontSize: "1.1rem",
            textAlign: "right",
          }}
        >
          No importa el tamaño de tu negocio, ganar siempre es posible. Gana
          tiempo pagándole a tus proveedores y cumpliéndole a tus empleados.
          Gana cuando el pago que te hacen tus clientes se convierte en dólares
          al instante.
        </Typography>
      </Box>
    </Box>
  );
};

export default BusinessComp;
