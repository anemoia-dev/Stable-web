import React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const SocialMedia = ({ optionChosen }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        padding: { xs: "1rem 1rem", md: "1rem 3rem" },
        alignItems: "flex-end",
        gap: "1rem",
        zIndex: 10,
        position: "absolute",
        //top: { xs: "11vh", md: "11vh" },
        right: { xs: "0.5rem", md: "1rem" },
      }}
    >
      <Link
        id="link_to_linkedin"
        href={"https://www.linkedin.com/company/stable%C2%AE"}
        target={"_blank"}
      >
        <LinkedInIcon
          sx={{
            fontSize: /* optionChosen !== -1 ? "1.8rem" : */ {
              xs: "2.2rem",
              sm: "2.5rem",
              md: "2.5rem",
            },
          }}
        />
      </Link>

      <Link
        id={"link_to_instagram"}
        href={"https://www.instagram.com/stablelatam/"}
        target={"_blank"}
      >
        <InstagramIcon
          sx={{
            /*  optionChosen !== -1 ? "1.8rem" :  */
            fontSize: /* optionChosen !== -1 ? "1.8rem" : */ {
              xs: "2.2rem",
              sm: "2.5rem",
              md: "2.5rem",
            },
          }}
        />
      </Link>

      <Link
        id={"link_to_facebook"}
        href={"https://www.facebook.com/StableLatam"}
        target={"_blank"}
      >
        <FacebookOutlinedIcon
          sx={{
            /* optionChosen !== -1 ? "1.8rem" : */
            fontSize: /* optionChosen !== -1 ? "1.8rem" : */ {
              xs: "2.2rem",
              sm: "2.5rem",
              md: "2.5rem",
            },
          }}
        />
      </Link>
    </Box>
  );
};

export default SocialMedia;
