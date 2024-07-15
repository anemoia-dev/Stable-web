import React from "react";
import PropTypes from "prop-types";
import { Button, Box, Typography, Container, Paper } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
export default function FloatingBanner({
  color,
  message,
  header,
  acceptText,
  denyText,
  onAccept,
  onDeny,
}) {
  const { t, i18n } = useTranslation("cookies");
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "0",
        zIndex: "200",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #ccc",
        padding: "1rem",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            textAlign: "flex-start",
            fontFamily: "unset",
            fontWeight: "bold",
            fontSize: "1.25rem",
          }}
        >
          {t("header")}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            textAlign: "flex-start",
            fontFamily: "unset",
          }}
        >
          {t("cookies")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginTop: { xs: 2, sm: 0 },
        }}
      >
        {acceptText && (
          <Button
            id="accept-button"
            variant="contained"
            sx={{
              fontFamily: "unset",
              bgcolor: "#20201f",
              fontStyle: "none",
              textTransform: "none",
              fontWeight: 400,
              borderRadius: "0px",
              "&:hover": {
                bgcolor: "gray",
              },
            }}
            onClick={onAccept}
          >
            {t("accept")}
          </Button>
        )}
        {denyText && (
          <Button
            variant="contained"
            sx={{
              bgcolor: "rgba(211, 133, 214, 1)",
              color: "black",
              fontFamily: "unset",
              fontStyle: "none",
              textTransform: "none",
              fontWeight: 400,
              borderRadius: "0px",
              "&:hover": {
                bgcolor: "white",
                color: "black",
              },
            }}
            onClick={onDeny}
          >
            {t("only")}
          </Button>
        )}

        <Button
          variant="contained"
          sx={{
            bgcolor: "#D0FFE6",
            color: "black",
            fontFamily: "unset",
            fontStyle: "none",
            textTransform: "none",
            fontWeight: 400,
            borderRadius: "0px",
            "&:hover": {
              bgcolor: "white",
              color: "black",
            },
          }}
        >
          <Link
            href="/cookies-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("info")}
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
