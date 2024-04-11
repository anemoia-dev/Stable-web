import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import parse from "html-react-parser";
import DownloadIcon from "@mui/icons-material/Download";
import Link from "next/link";
import Carrusel from "../components/Container";
import { useTranslation } from "react-i18next";
const Selected = ({ OptionsToChoose, optionChosen, navbarHeight, cat }) => {
  const { t, i18n } = useTranslation("Selected");
  console.log(t(`${cat}.secondColor`));
  return (
    <Box
      sx={{
        minHeight: { xs: "130vh", md: cat === "Global" ? "100vh" : "100vh" },
        backgroundImage: {
          xs: `linear-gradient(to bottom,${t(`${cat}.secondColor`)},${t(
            `${cat}.thirdColor`
          )})`,

          md:
            cat === "Global"
              ? `url("https://res.cloudinary.com/dzlhhijtz/image/upload/v1712371556/Stable%20Mockups/selected/Card1_nepbdq.svg")`
              : `linear-gradient(to bottom,${t(`${cat}.secondColor`)},${t(
                  `${cat}.thirdColor`
                )})`,
        },

        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "60%",
        position: "relative",
        width: "100%",
        bgcolor: "gray",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: {
            md: cat === "Global" ? "100vh" : "89vh",
          },
          top: {
            md: cat !== "Global" ? "11vh" : "0vh",
          },
          display: "flex",

          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Link href="/">
          <Button
            sx={{
              position: "absolute",
              fontFamily: "unset",
              right: "7vw",
              top: {
                xs: "15vh",
                md: cat === "Global" ? `${navbarHeight + 12}vh` : "4vh",
              },
              color: "black",
              fontSize: "1.3rem",
            }}
          >
            <ClearIcon
              sx={{
                fontSize: "2.5rem",
                fontWeight: "100",
              }}
            />
          </Button>
        </Link>

        <Box>
          <Box
            sx={{
              //bgcolor: "red",
              width: { xs: "60%", md: "22%" },
              position: "absolute",
              left: { xs: "3%", md: "10%" },
              top: {
                xs: "15vh",
                md: cat === "Global" ? `${navbarHeight + 12}vh` : "4vh",
              },
              height: { md: "60%" },
              padding: "1rem",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "unset",
                fontSize: { xs: "2rem", md: "3.5rem" },
                fontWeight: "700",
              }}
            >
              {t(`${cat}.title`)}
            </Typography>
            <Typography
              sx={{
                fontFamily: "unset",
                fontSize: "1.3rem",
                lineHeight: "1.5rem",
                marginTop: "1rem",
              }}
            >
              {parse(t(`${cat}.description`))}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                marginTop: "1rem",
                paddingBottom: "1rem",
                gap: { xs: 0, md: "1rem" },
                borderBottom: "2px solid black",
              }}
            >
              <Image
                src={
                  "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712371609/Stable%20Mockups/selected/appleWallet_ibxsbp.svg"
                }
                width={136}
                height={50}
              />
              <Image
                src={
                  "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712371610/Stable%20Mockups/selected/googleWallet_b16uys.svg"
                }
                width={156}
                height={50}
              />
            </Box>{" "}
            <AddIcon sx={{ right: 10, position: "absolute" }} />
            <Typography
              sx={{
                fontFamily: "unset",
                marginTop: "1.3rem",
                fontSize: "1.2rem",
                lineHeight: "1.3rem",
                fontWeight: "600",
              }}
            >
              {parse(t(`${cat}.featureText`))}
            </Typography>
          </Box>

          {/* IMAGES */}
          <Box
            sx={{
              display: { md: "flex" },
              //bgcolor: "yellow",
              width: "55%",
              position: "absolute",
              right: "10%",
              top: "7vh",
              height: "71.9%",
              zIndex: 10,
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: "100%",
                display: "flex",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  //bgcolor: "white",
                  display: { xs: "none", md: "block" },
                  width: "50%",
                  height: "100%",
                  left: "5%",
                  position: "absolute",
                  backgroundPosition: "bottom right",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    cat !== "Global" && `url(${t(`${cat}.insideImages.0`)})`,

                  backgroundSize: `${t(`${cat}.backgroundSizeMain`)}`,
                  /*   optionChosen === 1
                      ? "85%"
                      : optionChosen === 2
                      ? "68%"
                      : optionChosen === 4
                      ? "81%"
                      : "cover", */
                }}
              ></Box>

              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  //bgcolor: "blue",
                  right: 0,
                  position: "absolute",
                  width: "45%",
                  //zIndex: -10,
                  height: "85%",
                  //position: "absolute",
                  //right: 0,
                  backgroundSize: cat === "Compromiso" ? "56%" : "cover",
                  //bgcolor: "white",
                  backgroundImage:
                    cat !== "Global" && `url(${t(`${cat}.insideImages.1`)})`,
                  //backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top center",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>

        {}
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          right: "-25%",
          //top: "12vh",
          bottom: "30vh",
          height: "70vh",

          width: "110%",
          //height: "100%",
          zIndex: 0,
          display: { xs: "block", md: "none" },
        }}
      >
        <Image
          src={
            cat !== "Global"
              ? t(`${cat}.insideImages.0`)
              : "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712805384/Stable%20Mockups/selected/Clay_Phone_03_copia_1_owefoq.svg"
          }
          fill
        />
      </Box>
      <Box
        sx={{
          position: { xs: "absolute", md: "absolute" },
          width: { xs: "85vw", md: "60%" },
          bgcolor: {
            xs: t(`${cat}.thirdColor`),
            md: cat !== "Global" ? t(`${cat}.thirdColor`) : "transparent",
          },
          bottom: { xs: "12vh", md: "0vh" },
          right: { xs: 0, md: "10%" },
          height: { xs: "14%", md: "33vh" },
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-end" },
            justifyContent: "right",
            gap: "0.5rem",
            padding: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <DownloadIcon
              sx={{
                fontSize: "2rem",
              }}
            />
            <Typography
              sx={{
                fontFamily: "unset",
                fontSize: "1.5rem",
              }}
            >
              {t(`${cat}.downloadText`)}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              gap: "0.5rem",
              padding: "0rem",
            }}
          >
            <Box
              component={"img"}
              src={
                "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712365529/Stable%20Mockups/Main/google-us_hynsat.svg"
              }
              sx={{
                width: "140px",
              }}
            ></Box>
            <Box
              component={"img"}
              src={
                "https://res.cloudinary.com/dzlhhijtz/image/upload/v1712365525/Stable%20Mockups/Main/apple_osd3hx.svg"
              }
              sx={{
                width: "130px",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>

      {/* CARRUSEL */}
      <Box
        sx={{
          position: { xs: "absolute", md: "absolute" },
          width: { xs: "100%", md: "80%" },
          bottom: { xs: 0, md: 0 },
          left: { xs: 0, md: "10%" },
          height: { /*  xs: 0 */ md: "18vh" },
          zIndex: 1,
        }}
      >
        <Carrusel
          selected={parseInt(optionChosen)}
          Options={OptionsToChoose}
          cat={cat}
        />
      </Box>
    </Box>
  );
};

export default Selected;
