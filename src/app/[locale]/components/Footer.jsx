"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneOutlineIcon from "@mui/icons-material/PhoneOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Montserrat } from "next/font/google";
import * as S from "../../../styles/mastercardlogo.module.css";
import * as T from "../../../styles/divider.module.css";
import { useTranslation } from "react-i18next";

const montserrat = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
});

const Footer = ({ cat }) => {
  const { t, ready } = useTranslation("Footer");
  return (
    <Box
      sx={{
        "@media (orientation:landscape)": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },

        "@media (orientation:portrait)": {
          display: "flex",
          flexDirection: { xs: "column" },
        },
        bgcolor: !cat ? "#202020" : "rgba(0, 0, 0, 1)",
        display: "block",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          "@media (orientation:landscape)": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "0rem 15vw 0rem 15vw" },
            display: "flex",
            margin: "0 auto",
            flexDirection: { xs: "column", sm: "row", md: "row" },

            gap: { xs: "0rem", sm: "2rem", md: "3rem" },
            paddingTop: { md: "3vh" },
            maxWidth: { xs: "640px", sm: "768px", md: "1024px", lg: "1280px" },
          },

          "@media (orientation:portrait)": {
            display: "flex",
            flexDirection: { xs: "row", sm: "row" },
            alignItems: { xs: "center", sm: "center" },
            justifyContent: { xs: "space-around", sm: "center" },
            gap: { sm: "5vw" },
          },
        }}
      >
        <Box
          component="img"
          src={
            "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712362743/Stable%20Mockups/Main/whiteGif_wjaxvz.gif"
          }
          sx={{
            "@media (orientation: landscape)": {
              height: { sm: "13vw", md: "7vw" },
              marginTop: { xs: "4vh", md: "0vh" },
              margin: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },

            "@media (orientation:portrait)": {
              height: { xs: "15vh", sm: "14vw", md: "7vw" },

              marginTop: { xs: "2vh" },
            },
          }}
        />

        <hr className={T.divider} />

        <Box
          className={S.containter}
          sx={{
            marginTop: { xs: "2.5vh", sm: "0vh", md: "-3vh" },
          }}
        >
          <h1>
            <i className={S.mastercardIcon}></i>
          </h1>
        </Box>
      </Box>

      <Box
        sx={{
          "@media (orientation:landscape)": {
            display: "flex",
            marginTop: { sm: "3vw", md: "2vw" },
            gap: "5vw",
            paddingBottom: { xs: "1vh", sm: 0, md: "3rem" },
            paddingTop: { xs: "5vh", sm: "1vh", md: "1vh" },
            color: "white",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: { xs: "1vh", md: "3rem" },
            paddingTop: { xs: "5vh", md: "1vh" },
            transform: {
              xs: "translate(0, -4.5vh)",
              sm: "translate(0, -50%)",
              md: "none",
            },
          },

          "@media (orientation:portrait)": {
            display: { xs: "flex" },
            flexDirection: { xs: "column" },
            alignItems: { xs: "center" },
            gap: { xs: "4vh" },
            padding: { xs: "0vw 2vh 2vh 0vw" },
          },
        }}
      >
        <Box
          sx={{
            "@media (orientation:landscape)": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            },

            "@media (orientation:portrait)": {
              display: { xs: "flex" },
              gap: { xs: "1rem" },
            },
          }}
        >
          <MailOutlineIcon
            sx={{
              fontSize: "1.8rem",
              fontWeight: 50,
              color: "rgba(125, 204, 161, 1)",
            }}
          />
          <Typography
            sx={{
              fontFamily: montserrat.style,
              fontSize: "1.1rem",
              textDecorationLine: "underline",
              color: "white",
            }}
          >
            <a
              style={{ "text-decoration": "none" }}
              href="mailto:clientes@stable-app.com"
              target="_blank"
            >
              {" "}
              clientes@stable-app.com
            </a>
          </Typography>
        </Box>

        <Box
          sx={{
            "@media (orientation:landscape)": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            },

            "@media (orientation:portrait)": {
              display: { xs: "flex" },
              gap: { xs: "1rem" },
            },
          }}
        >
          <PhoneOutlineIcon
            sx={{
              fontSize: "1.8rem",
              fontWeight: 50,
              color: "rgba(125, 204, 161, 1)",
            }}
          />
          <Typography
            sx={{
              fontFamily: montserrat.style,
              fontSize: "1.1rem",
              color: "white",
            }}
          >
            +57 333 0334277
          </Typography>
        </Box>

        <Box
          sx={{
            "@media (orientation:landscape)": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            },

            "@media (orientation:portrait)": {
              display: { xs: "flex" },
              gap: { xs: "1rem" },
            },
          }}
        >
          <WhatsAppIcon
            sx={{
              fontSize: "1.8rem",
              fontWeight: 50,
              color: "rgba(125, 204, 161, 1)",
            }}
          />
          <Typography
            sx={{
              fontFamily: montserrat.style,
              fontSize: "1.1rem",
              textDecorationLine: "underline",
              color: "white",
            }}
          >
            <a
              style={{ "text-decoration": "none" }}
              href="https://wa.me/573238016000"
              target="_blank"
            >
              {" "}
              +57 323 801 6000
            </a>
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: { xs: "100vw", md: "95vw" },
        }}
      >
        <hr style={{ width: "100%" }} />
      </Box>

      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: { xs: "none", md: "4rem" },
          margin: "0 auto",
          padding: "2rem",
          maxWidth: { xs: "640px", sm: "768px", md: "1024px", lg: "1280px" },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: montserrat.style,
          }}
        >
          {t("title")}
        </Typography>
        <Typography
          sx={{
            display: { xs: "none", md: "flex" },
            fontFamily: montserrat.style,
          }}
        >
          Stable®
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
