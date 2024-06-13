// This is a React component that displays a burger button menu for small screens.
// It uses the Material UI library for the styling.

import React, { useEffect, useState } from "react";
import { Menu, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

import { useTranslation } from "react-i18next";

const BurgerButton = ({ cat }) => {
  // Use the i18n hook from react-i18next to get the translation function and the current language.
  const { t, lang } = useTranslation();

  // State variable for the anchor of the menu.
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Boolean variable for the open state of the menu.
  const open = Boolean(anchorEl);

  // Function to handle the click event on the burger button.
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle the close event of the menu.
  const handleClose = () => {
    setAnchorEl(null);
  };

  // State variable for the screen orientation.
  const [orientation, seOrientation] = useState(0);

  // Effect hook to handle the screen resize event.
  useEffect(() => {
    // Function to handle the resize event.
    function handleresize() {
      // Update the screen orientation state.
      seOrientation(window.screen.orientation.angle);
    }

    // Add the resize event listener.
    window.addEventListener("resize", handleresize);

    // Cleanup function to remove the event listener on unmount.
    return () => window.removeEventListener("resize", handleresize);
  }, []);

  // Return the JSX for the burger button menu.
  return (
    <Box
      // The box is positioned relative to its parent.
      sx={{
        position: "relative",
      }}
    >
      <Box
        // The inner box is hidden on medium and larger screens.
        sx={{
          "@media (orientation: portrait)": {
            display: { md: "none" },
          },
          // The inner box is positioned absolutely on medium and larger screens.
          "@media (orientation: landscape)": {
            display: { md: "none" },
            position: "absolute",
            top: 0,
          },
        }}
      >
        <IconButton
          // The burger button is clicked to open the menu.
          onClick={handleClick}
        >
          <MenuIcon
            // The icon is sized and colored accordingly.
            sx={{
              fontSize: "2.5rem",
              color: cat && cat !== "Global" ? "#20201f" : "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </IconButton>

        <Menu
          // The menu is opened and closed based on the anchorEl state.
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          // The menu is styled with a black background and white text.
          sx={{
            ".MuiMenu-paper": {
              borderRadius: 0,
              marginTop: "3%",
              bgcolor: "black",
              color: "white",
              width: 280,
            },
          }}
        >
          {/* The menu contains a link to the center for help. */}
          <Box
            // The box is a flex container with a gap of 0.5rem.
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              padding: "1rem 1rem",
              color: "white",
            }}
          >
            <Typography
              sx={{
                fontFamily: "unset",
                display: { xs: "flex", md: "flex" },
              }}
            >
              {" "}
              {/* The link opens in a new tab. */}
              <Link
                href={"https://41506338.hs-sites.com/es/centro-de-ayuda"}
                target="_blank"
              >
                {/* The link text is translated. */}
                {t("navBarMain.centerHelp")}
              </Link>
            </Typography>

            <Typography
              sx={{
                fontFamily: "unset",
                display: { xs: "flex", md: "flex" },
              }}
            >
              {" "}
              {/* The link opens in a new tab. */}
              <Link href={"/form"} /* target="_blank" */>
                {/* The link text is translated. */}
                {t("navBarMain.join")}
              </Link>
            </Typography>
          </Box>
        </Menu>
      </Box>
    </Box>
  );
};

export default BurgerButton;
