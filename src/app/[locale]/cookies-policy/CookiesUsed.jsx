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

import { useTranslation } from "react-i18next";

const CookiesTable = () => {
  const { t, i18n } = useTranslation("cookiesList");
  const lang = i18n.language;

  const cookiesList = t(`${lang}`, { returnObjects: true });
  console.log(cookiesList);
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
          {cookiesList.map((cookie) => (
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
