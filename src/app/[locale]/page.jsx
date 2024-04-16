"use strict";
import React from "react";
import Image from "next/image";
import NavBar from "./components/NavBar";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

const Options = dynamic(() => import("./components/Options"), {
  loading: () => <p>Loading...</p>,
});

import NewDownloadImage from "./components/NewDownloadMain";
const Life = dynamic(() => import("./components/Life"), {
  loading: () => <p>Loading...</p>,
});

const People = dynamic(() => import("./components/People"), { ssr: false });

const HowToUse = dynamic(() => import("./components/HowToUse"), { ssr: false });

const BusinessComp = dynamic(() => import("./components/BusinessComp"), {
  loading: () => <p>Loading...</p>,
});

const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <p>Loading...</p>,
});

export default async function Home(props) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          width: "100vw",
        }}
      >
        <NavBar
          color={!props.params.category ? "#202020" : props.params.category}
          cat={props.params.category}
        />
        <Box
          sx={{
            width: "100%",
            position: "relative",
            alignItems: "center",
            height: { xs: "100vh", md: "100vh" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <NewDownloadImage />
        </Box>
        <Box
          sx={{
            height: { xs: "60vh", md: "50vh" },
            width: "100%",
            background: "linear-gradient(to bottom, #20201f, black)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Options />
        </Box>
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            display: { xs: "block", md: "flex" },
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            sx={{
              height: { xs: "40%", md: "100%" },
              position: "relative",
            }}
          >
            <Image
              src="https://res.cloudinary.com/dzlhhijtz/image/upload/v1712344217/Stable%20Mockups/Main/LifeWallpaper_dys5ud.svg"
              alt="LifeWallpaper"
              fill
              loading="lazy"
              style={{
                objectFit: "cover",
                objectPosition: "Top",
                zIndex: -1,
              }}
            />
          </Box>
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
              top: { md: 0 },
              bottom: { xs: "0", md: "0" },
              height: { xs: "60%", md: "40%" },
              width: "100%",
              bgcolor: { xs: "#20201F", md: "transparent" },
              display: { md: "block" },
            }}
          >
            <Life />
          </Box>{" "}
        </Box>
        <Box
          sx={{
            height: { xs: "125vh", md: "110vh" },
            bgcolor: "#20201F",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <People />
        </Box>{" "}
        <Box
          sx={{
            padding: { xs: "0rem 1rem", md: "0rem 6rem" },
            height: { xs: "100vh", md: "100vh" },
            background: "#202020",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <HowToUse />
        </Box>
        <Box
          sx={{
            height: { xs: "100vh", md: "100vh" },
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
              top: { md: 0 },
              bottom: { xs: "0", md: "0" },
              height: { xs: "40%", md: "100%" },
              width: "100%",
              bgcolor: { md: "transparent" },
              display: { md: "block" },
            }}
          >
            <Image
              src="https://res.cloudinary.com/dzlhhijtz/image/upload/v1712344451/Stable%20Mockups/Main/BusinessWallpaper_bdwosi.svg"
              alt="BusinessWallpaper"
              fill
              loading="lazy"
              style={{
                objectFit: "cover",
                objectPosition: "bottom",
                zIndex: -1,
              }}
            />
          </Box>

          <Box
            sx={{
              height: { xs: "60%" },
            }}
          >
            <BusinessComp />
          </Box>
        </Box>
        <Footer cat={props.params.category} />
      </Box>
    </>
  );
}
