import React, { useEffect, useState } from "react";
import { Menu, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

import { useTranslation } from "react-i18next";

const BurgerButton = ({ cat }) => {
  const { t, lang } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [orientation, seOrientation] = useState(0);
  useEffect(() => {
    function handleresize() {
      seOrientation(window.screen.orientation.angle);
    }

    window.addEventListener("resize", handleresize);

    return () => window.removeEventListener("resize", handleresize);
  }, []);
  return (
    <Box>
      <Box
        sx={{
          "@media (orientation: portrait)": {
            display: { md: "none" },
          },
          "@media (orientation: landscape)": {
            display: { md: "none" },

            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <IconButton onClick={handleClick}>
          <MenuIcon
            sx={{
              fontSize: "2.5rem",
              color: cat ? "#20201f" : "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
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
          {/* Languages */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              padding: "1rem 2rem",
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
              <Link
                href={"https://41506338.hs-sites.com/es/centro-de-ayuda"}
                target="_blank"
              >
                {t("navBarMain.centerHelp")}
              </Link>
            </Typography>
          </Box>
        </Menu>
      </Box>
    </Box>
  );
};

export default BurgerButton;
