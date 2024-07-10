"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Box, Button, Typography } from "@mui/material";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    /* const consentCookies = Cookies.get("cookieConsent");
    if (!consentCookies) {
      setShowBanner(true);
    } */
  }, []);

  const handleAccept = () => {
    //Cookies.set("cookieConsent", "true", { expires: 365, path: "/" });
    setShowBanner(false);
  };

  const handleReject = () => {
    //Cookies.set("cookieConsent", "false", { expires: 365, path: "/" });
    setShowBanner(false);
  };

  return (
    showBanner && (
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
        <Typography
          sx={{
            fontSize: "14px",
            textAlign: "flex-start",
            fontFamily: "unset",
          }}
        >
          This website uses cookies to improve your experience. By using this
          website, you agree to our {/* <a href="/[locale]/cookies"> */}Cookies
          Policy{/* </a>. */}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Button
            variant="contained"
            onClick={handleAccept}
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
          >
            Accept
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleReject}
            sx={{
              fontFamily: "unset",
              fontStyle: "none",
              textTransform: "none",
              fontWeight: 400,
              borderRadius: "0px",
            }}
          >
            Reject
          </Button>
        </Box>
      </Box>
    )
  );
};

export default CookieBanner;
