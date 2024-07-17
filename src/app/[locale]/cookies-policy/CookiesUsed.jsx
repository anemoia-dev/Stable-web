import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const cookiesData = [
  {
    name: "NEXT_LOCALE",
    purpose: "Almacenar la configuración de localización del usuario",
    duration: "Sesión",
    provider: "propio",
  },
  {
    name: "NID",
    purpose: "Recordar tus preferencias y otra información",
    duration: "6 meses",
    provider: "tercero",
  },
  {
    name: "VISITOR_INFO1_LIVE",
    purpose: "Medir tu ancho de banda y determinar la interfaz de YouTube",
    duration: "6 meses",
    provider: "tercero",
  },
  {
    name: "VISITOR_PRIVACY_METADATA",
    purpose: "Almacenar las preferencias de privacidad del usuario",
    duration: "Variable",
    provider: "tercero",
  },
  {
    name: "YSC",
    purpose: "Rastrear las vistas de videos incrustados",
    duration: "Sesión",
    provider: "tercero",
  },
  {
    name: "_GRECAPTCHA",
    purpose: "Proteger el sitio contra spam y abuso",
    duration: "6 meses",
    provider: "tercero",
  },
  {
    name: "__cf_bm",
    purpose:
      "Gestionar el tráfico entrante y mejorar la seguridad del sitio web",
    duration: "30 minutos",
    provider: "tercero",
  },
  {
    name: "_cfuid",
    purpose:
      "Identificar clientes individuales y aplicar configuraciones de seguridad",
    duration: "30 días",
    provider: "tercero",
  },
  {
    name: "__hstc",
    purpose: "Seguimiento de visitantes",
    duration: "13 meses",
    provider: "tercero",
  },
  {
    name: "hubspotutk",
    purpose: "Mantener el seguimiento de la identidad de un visitante",
    duration: "13 meses",
    provider: "tercero",
  },

  {
    name: "_ga",
    purpose: "Cookies de Google analytics para la distinción de usuarios",
    duration: "13 meses",
    provider: "tercero",
  },

  {
    name: "_ga_JX5DR5RLKC",
    purpose: "Cookie de googles analitycs para mantener el estado de la sesión",
    duration: "13 meses",
    provider: "tercero",
  },
];

const CookiesTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: 4,
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, margin: 4, fontFamily: "unset" }}
      >
        Política de Cookies
      </Typography>
      <Table
        sx={{ minWidth: 650, fontFamily: "unset" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontFamily: "unset",
              }}
            >
              Nombre de la Cookie
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "unset",
              }}
            >
              Propósito
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "unset",
              }}
            >
              Duración
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "unset",
              }}
            >
              Proveedor
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cookiesData.map((cookie) => (
            <TableRow key={cookie.name}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  fontFamily: "unset",
                }}
              >
                {cookie.name}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "unset",
                }}
              >
                {cookie.purpose}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "unset",
                }}
              >
                {cookie.duration}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "unset",
                }}
              >
                {cookie.provider}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CookiesTable;
