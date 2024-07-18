"use client";
import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import CookiesTable from "./CookiesUsed";
import CircleIcon from "@mui/icons-material/Circle";
import { useTranslation } from "react-i18next";
const CookiesList = () => {
  const { t } = useTranslation("cookies");
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "block",
        bgcolor: "white",
        padding: {
          xs: "1rem",
          sm: "4rem 6rem",
        },
      }}
    >
      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {t("header")}
      </Typography>

      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "1.1rem",
          textAlign: "justify",
          marginTop: "2rem",
        }}
      >
        {t("firstText")}
      </Typography>

      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "2rem",
          textAlign: "justify",
          marginTop: "1vh",
        }}
      >
        {t("titleDefCookies")}
      </Typography>

      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "1.1rem",
          textAlign: "justify",
          marginTop: "1vh",
        }}
      >
        {t("cookies_info")}
      </Typography>

      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "2rem",
          textAlign: "justify",
          marginTop: "1vh",
        }}
      >
        {t("types_of_cookies")}
      </Typography>

      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "1.1rem",
          textAlign: "justify",
          marginTop: "1vh",
        }}
      >
        {t("cookie_management_info")}
      </Typography>

      <List
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "1.1rem",
          textAlign: "justify",
        }}
      >
        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
            lineHeight: "1.7rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          {t("own_cookies")}
        </ListItem>
        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
            lineHeight: "1.7rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          {t("third_party_cookies")}
        </ListItem>
      </List>

      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "1.1rem",
          textAlign: "justify",
          marginTop: "1vh",
        }}
      >
        {t("third_parties_cookies_note")}
      </Typography>

      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "1.1rem",
          textAlign: "justify",
          marginTop: "2rem",
        }}
      >
        {t("cookie_classification")}
      </Typography>

      <List
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "1.1rem",
          textAlign: "justify",
        }}
      >
        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
            lineHeight: "1.7rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          {t("technical_cookies")}
        </ListItem>

        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
            lineHeight: "1.7rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          {t("customization_cookies")}
        </ListItem>

        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
            lineHeight: "1.7rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          {t("analysis_cookies")}
        </ListItem>

        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
            lineHeight: "1.7rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          {t("advertising_cookies")}
        </ListItem>

        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
            lineHeight: "1.7rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          {t("behavioral_advertising_cookies")}
        </ListItem>

        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
            lineHeight: "1.7rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          {t("external_social_network_cookies")}
        </ListItem>
      </List>

      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "2rem",
          textAlign: "justify",
          marginTop: "2rem",
        }}
      >
        {t("disable_and_delete_cookies")}
      </Typography>

      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "1.1rem",
          textAlign: "justify",
          marginTop: "2rem",
        }}
      >
        {t("cookie_management")}
      </Typography>

      <List>
        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          <Link
            href={
              "https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("internet_explorer_edge")}
          </Link>
        </ListItem>

        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          <Link
            href={
              "https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("firefox")}
          </Link>
        </ListItem>

        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          <Link
            href={"https://support.google.com/accounts/answer/61416?hl=es"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("chrome")}
          </Link>
        </ListItem>

        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          <Link
            href={"https://support.apple.com/es-es/HT201265"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("safari")}
          </Link>
        </ListItem>

        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          <Link
            href={"https://help.opera.com/en/latest/web-preferences/#cookies"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("opera")}
          </Link>
        </ListItem>
      </List>

      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "2rem",
          textAlign: "justify",
          marginTop: "2rem",
        }}
      >
        {t("cookie_declaration")}
      </Typography>

      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "1.1rem",
          textAlign: "justify",
          marginTop: "2rem",
        }}
      >
        {t("cookie_list_intro")}
      </Typography>

      <CookiesTable />

      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "2rem",
          textAlign: "justify",
          marginTop: "2rem",
        }}
      >
        {t("cookie_policy_acceptance")}
      </Typography>

      <Typography
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "1.1rem",
          textAlign: "justify",
          marginTop: "1.1rem",
        }}
      >
        {t("cookie_policy_info")}
      </Typography>

      <List
        sx={{
          width: "100%",
          color: "black",
          fontFamily: "unset",
          fontSize: "1.1rem",
          textAlign: "justify",
          marginTop: "1.1rem",
        }}
      >
        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
            lineHeight: "1.7rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          {t("accept_all")}
        </ListItem>

        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
            lineHeight: "1.7rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          {t("accept_essential_only")}
        </ListItem>

        <ListItem
          sx={{
            fontFamily: "unset",
            fontSize: "1.1rem",
            lineHeight: "1.7rem",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircleIcon
              fontSize="small"
              sx={{
                color: "black",
                marginRight: 1,

                fontFamily: "unset",
                fontSize: "1.1rem",
              }}
            />
          </ListItemIcon>
          {t("more_info")}
        </ListItem>
      </List>
    </Box>
  );
};

export default CookiesList;
