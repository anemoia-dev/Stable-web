import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import parse from "html-react-parser";
import DownloadIcon from "@mui/icons-material/Download";
import Carrusel from "./Container";
const Selected = ({ OptionsToChoose, optionChosen, navbarHeight, info }) => {
  const [infoAll, setInfoAll] = useState(info);

  useState(() => {
    setInfoAll(info);
  }, [info]);

  return (
    <Box
      sx={{
        height: "100vh",
        //backgroundImage: `linear-gradient(to bottom,${infoAll.secondColor},${infoAll.thirdColor})`,
        backgroundImage:
          optionChosen > 0
            ? `linear-gradient(to bottom,${info.secondColor},${info.thirdColor})`
            : `url("./Card1.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        width: "100%",
        bgcolor: "gray",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "89vh",
          top: "11vh",
          display: "flex",
          //justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Button
          sx={{
            position: "absolute",
            fontFamily: "unset",
            right: "0",
            top: "0",
            color: "black",
            fontSize: "1.3rem",
          }}
          onClick={() => OptionsToChoose(-1)}
        >
          <ClearIcon
            sx={{
              fontSize: "2.5rem",
              fontWeight: "100",
            }}
          />
        </Button>
        <Box>
          <Box
            sx={{
              // bgcolor: "red",
              width: "22%",
              position: "absolute",
              left: "10%",
              top: "4vh",
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
              {info.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "unset",
                fontSize: "1.3rem",
                lineHeight: "1.5rem",
                marginTop: "1rem",
              }}
            >
              {parse(info.description)}
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
              <Image src={"./appleWallet.svg"} width={136} height={50} />
              <Image src={"./googleWallet.svg"} width={156} height={50} />
            </Box>{" "}
            <AddIcon sx={{ right: 20, position: "absolute" }} />
            <Typography
              sx={{
                fontFamily: "unset",
                marginTop: "1.3rem",
                fontSize: "1.2rem",
                lineHeight: "1.3rem",
                fontWeight: "600",
              }}
            >
              {parse(info.featureText)}
            </Typography>
          </Box>
          {/* IMAGES */}
          <Box
            sx={{
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
                  backgroundPosition: "top right",
                  backgroundRepeat: "no-repeat",
                  backgroundImage:
                    optionChosen > 0 && `url(${info.insideImages[0]})`,
                  backgroundSize: info.backgroundSizeMain,
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
                  backgroundSize: optionChosen === 4 ? "56%" : "cover",
                  //bgcolor: "white",
                  backgroundImage:
                    optionChosen > 0 && `url(${info.insideImages[1]})`,
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
            width: "80%",
            bottom: 0,
            height: "18vh",
            zIndex: 1,
          }}
        >
          <Carrusel
            //elements={options}
            selected={parseInt(optionChosen)}
            Options={OptionsToChoose}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "60%",
            bgcolor: optionChosen > 0 ? info.thirdColor : "transparent",
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
                Descárgala ahora
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
