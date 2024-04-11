import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import parse from "html-react-parser";
import DownloadIcon from "@mui/icons-material/Download";
import Carrusel from "./Container";
import { useTranslation } from "react-i18next";

const Selected = ({
  OptionsToChoose,
  optionChosen,
  navbarHeight,
  info,
  cat,
}) => {
  /*   const [infoAll, setInfoAll] = useState(info);

  useState(() => {
    setInfoAll(info);
  }, [info]);
 */

  const { t, i18n } = useTranslation("Selected");

  return (
    <Box
      sx={{
        height: { xs: "100vh", md: cat === "Global" ? "100vh" : "90vh" },
        backgroundImage: `linear-gradient(to bottom,${t(
          `${cat}.secondColor`
        )},${t(`${cat}.secondColor`)})`,
        backgroundImage:
          info.title !== "Global"
            ? `linear-gradient(to bottom,${info.secondColor},${info.thirdColor})`
            : `url("/Card1.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center 60%",
        position: "relative",
        width: "100%",
        bgcolor: "gray",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: cat === "Global" ? "100vh" : "89vh",
          // top: "11vh",
          display: "flex",
          //justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Link href="/">
          <Button
            sx={{
              position: "absolute",
              fontFamily: "unset",
              right: "8vw",
              top: cat === "Global" ? `${navbarHeight + 12}vh` : "4vh",
              color: "black",
              fontSize: "1.3rem",
            }}
            // onClick={() => OptionsToChoose(-1)}
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
              // bgcolor: "red",
              width: "22%",
              position: "absolute",
              left: "10%",
              top: cat === "Global" ? `${navbarHeight + 12}vh` : "4vh",
              height: "60%",
              padding: "1rem",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "unset",
                fontSize: "3.5rem",
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
                marginTop: "1rem",
                paddingBottom: "1rem",
                gap: "1rem",
                borderBottom: "2px solid black",
              }}
            >
              <Image src={"/appleWallet.svg"} width={136} height={50} />
              <Image src={"/googleWallet.svg"} width={156} height={50} />
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
              display: { xs: "none", md: "flex" },
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
                width: "100%",
                display: "flex",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  //bgcolor: "white",
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

        <Box
          sx={{
            position: "absolute",
            width: { xs: "100%", md: "80%" },
            bottom: 0,
            height: "18vh",
            zIndex: 1,
          }}
        >
          <Carrusel
            //elements={options}
            selected={parseInt(optionChosen)}
            Options={OptionsToChoose}
            cat={cat}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "60%",
            bgcolor: cat !== "Global" ? info.thirdColor : "none",
            bottom: "0vh",
            right: "10%",
            height: "33vh",
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
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
                src={"/google-us.svg"}
                sx={{
                  width: "140px",
                }}
              ></Box>
              <Box
                component={"img"}
                src={"/apple.svg"}
                sx={{
                  width: "130px",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Selected;
