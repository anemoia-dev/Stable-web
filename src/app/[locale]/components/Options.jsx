"use client";
import React, { Fragment } from "react";
import * as options from "../../../files/optionsdb";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const options1 = {
  o1: "Global",
  o2: "Cercania",
  o3: "Confianza",
  o4: "Responsabilidad",
  o5: "Compromiso",
  //o1Aux: "Experiencias",
};

const Options = ({}) => {
  const { t, i18n } = useTranslation();
  let initialHeights = [45, 45, 45, 45, 45];

  const [heights, setHeights] = useState(initialHeights);
  const [hoverNum, setHoverNum] = useState(-1);
  const [selectedNum, setSelectedNum] = useState(-1);

  useEffect(() => {
    if (hoverNum === -1) {
      const setHeightsEach = setInterval(() => {
        setHeights(heights.map(() => getRandomArbitrary(41, 46)));
      }, 2000);
      return () => clearInterval(setHeightsEach);
    }
  }, [heights, hoverNum]);

  const handleChange = (index) => {
    setHoverNum(index);

    let heights2;
    if (hoverNum !== -1) {
      heights2 = heights.map((n, i) => {
        return parseInt(index) === i ? 50 : 50;
      });
    } else {
      heights2 = heights.map((i) => i);
      heights2 = heights2.map((el, id) => (id === parseInt(index) ? 50 : 50));
    }
    setHeights(heights2);
  };
  return (
    <Box
      sx={{
        bottom: 0,
        overflow: "hidden",
        "@media (orientation: landscape)": {
          height: { sm: "100vw", xs: "100vh", md: "100%" },
        },
        "@media (orientation: portrait)": {
          height: { sm: "80vh", xs: "106vh", md: "100%" },
        },
      }}
    >
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          alignItems: "flex-end",
          flexDirection: { xs: "column", md: "row" },
          position: { xs: "absolute", md: "absolute" },
          bottom: { xs: "8%", md: 0 },
          heigth: "100%",
          width: "100%",
        }}
      >
        {options.map((el, id) => {
          return (
            <Fragment key={id}>
              <Box
                id={id}
                key={id}
                component="div"
                onMouseEnter={(e) => {
                  handleChange(id);
                }}
                onMouseLeave={() => {
                  setHoverNum(-1);
                  setHeights(initialHeights);
                }}
                sx={{
                  cursor: "pointer",

                  backgroundColor: { xs: "#202020", md: el.color },
                  display: selectedNum !== -1 && "none",

                  width: {
                    xs: `${((heights[id] - 41) * 20) / 4 + 70}vw`,
                    md: "20%",
                  },
                  "@media (orientation: landscape)": {
                    height: {
                      sm: "20vw",
                      md: `${heights[id]}vh`,
                    },
                  },
                  "@media (orientation: portrait)": {
                    height: {
                      xs: "10vh",
                      sm: "15vh",

                      md: `${heights[id]}vh`,
                    },
                  },

                  justifyContent: "center",
                  position: "relative",
                  direction: "row",
                  opacity:
                    parseInt(hoverNum) === -1
                      ? 1
                      : parseInt(hoverNum) === id
                      ? 1
                      : 0.5,
                  bottom: 0,
                  "&: hover": {
                    transition:
                      parseInt(hoverNum) === -1 ? "all 1s" : "all 0.3s",
                  },
                  transition: "all 1s",
                }}
              >
                <Link href={options1[`o${id + 1}`]}>
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <Image
                      src={el.coverImage}
                      alt="cover"
                      fill
                      priority={false}
                      style={{
                        transition: "opacity 0.5s",
                        "object-fit": "cover",
                        objectPosition: "Top",
                      }}
                    ></Image>
                  </Box>

                  <Box
                    key={id}
                    sx={{
                      display: "flex",
                      alignItems: { xs: "left", md: "center" },
                      flexDirection: { xs: "column", md: "row" },
                      justifyContent: { xs: "center", md: "center" },
                      position: "absolute",
                      borderBottom: { md: "1px solid rgba(168, 168, 168, 1)" },
                      bottom: 0,
                      color: "white",
                      height: { xs: "100%", md: "2rem" },
                      width: "100%",
                      backgroundColor: "#202020",
                      padding: {
                        xs: "0",
                        md: "1.5rem",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        margin: { xs: "0 30px", md: "0 auto" },
                        fontFamily: "unset",
                        alignItems: "end",
                        padding: {
                          xs: "0 0 0 0rem",
                          md: 0,
                        },

                        fontSize: {
                          xs: "1.25rem",
                          md: "24px",
                        },
                      }}
                    >
                      {t(`Options.o${id}`)}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Fragment>
          );
        })}
      </Box>
    </Box>
  );
};

export default Options;
