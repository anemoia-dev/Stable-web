import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import CookiesTable from "./CookiesUsed";
import CircleIcon from "@mui/icons-material/Circle";

const CookiesList = () => {
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
        Política de Cookies
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
        Para garantizar la transparencia en el manejo y uso de datos, Stable
        informa acerca del uso de las cookies en el sitio web
        www.stable-life.com en la siguiente política de cookies:
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
        ¿Qué son las cookies?
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
        Las cookies son pequeños archivos que se pueden descargar en su equipo a
        través de las páginas web. Son herramientas con un papel importante en
        la prestación de diversos servicios de la red., permiten a una web
        analizar y recuperar información sobre los hábitos de navegación de un
        usuario, y a partir de esa información se puede mejorar la experiencia
        del mismo mediante un mejor servicio.
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
        Tipos de cookies
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
        {" "}
        Dependiendo de la entidad que gestione el dominio desde donde se envíen
        las cookies y la configuración del navegador, se pueden distinguir las
        siguientes categorías:
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
          Cookies propias: aquellas que se envían al equipo terminal del usuario
          desde un equipo o dominio gestionado por el propio editor, y desde el
          cual se presta el servicio solicitado por el usuario
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
          Cookies de terceros: se envían al equipo del usuario desde un equipo o
          dominio que no es gestionado por el editor, sino por otra entidad que
          trata los datos obtenidos a través de las cookies
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
        En caso de que las cookies sean instaladas desde un equipo o dominio
        gestionado por el propio editor pero la información que se recoja
        mediante éstas sea gestionada por un tercero, no pueden ser consideradas
        como cookies propias
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
        Existe también una segunda clasificación, según el plazo de tiempo que
        permanecen almacenadas en el navegador del cliente, pudiendo tratarse
        de:
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
          Cookies técnicas: aquellas que permiten al usuario la navegación a
          través de una página web, plataforma o aplicación y la utilización de
          las diferentes opciones o servicios que en ella existan como, por
          ejemplo, controlar el tráfico y la comunicación de datos, identificar
          la sesión, acceder a partes de acceso restringido, recordar los
          elementos que integran un pedido, realizar el proceso de compra de un
          pedido, realizar la solicitud de inscripción o participación en un
          evento, utilizar elementos de seguridad durante la navegación,
          almacenar contenidos para la difusión de vídeos o sonido o compartir
          contenidos a través de redes sociales.
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
          Cookies de personalización: permiten al usuario acceder al servicio
          con algunas características de carácter general predefinidas en
          función de una serie de criterios en el terminal del usuario como por
          ejemplo serian el idioma, el tipo de navegador a través del cual
          accede al servicio, la configuración regional desde donde accede al
          servicio, etc
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
          Cookies de análisis: permiten al responsable de las mismas, el
          seguimiento y análisis del comportamiento de los usuarios de los
          sitios web a los que están vinculadas. La información recogida
          mediante este tipo de cookies se utiliza en la medición de la
          actividad de los sitios web, aplicación o plataforma y para la
          elaboración de perfiles de navegación de los usuarios de dichos
          sitios, aplicaciones y plataformas, con el fin de introducir mejoras
          en función del análisis de los datos de uso que hacen los usuarios del
          servicio
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
          Cookies publicitarias: permiten al responsable de las mismas, el
          seguimiento y el análisis de la gestión publicitaria de los sitios web
          a los que están vinculadas. La información recogida mediante este tipo
          de cookies se utiliza para la elaboración de perfiles de navegación de
          los usuarios de dichos sitios, aplicaciones y plataformas, con el fin
          de introducir mejoras en función del seguimiento y el análisis de los
          datos de uso que hacen los usuarios del servicio
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
          Cookies de publicidad comportamental: permiten al responsable de las
          mismas, el seguimiento y el análisis de la gestión publicitaria de los
          sitios web a los que están vinculadas. La información recogida
          mediante este tipo de cookies se utiliza para la elaboración de
          perfiles de navegación de los usuarios de dichos sitios, aplicaciones
          y plataformas, con el fin de introducir mejoras en función del
          seguimiento y el análisis de los datos de uso que hacen los usuarios
          del servicio
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
          Cookies de redes sociales externas: se utilizan para que los
          visitantes puedan interactuar con el contenido de diferentes
          plataformas sociales (facebook, youtube, twitter, linkedIn, etc.) y
          que se generen únicamente para los usuarios de dichas redes sociales.
          Las condiciones de utilización de estas cookies y la información
          recopilada se regula por la política de privacidad de la plataforma
          social correspondiente
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
        Desactivación y elminación de cookies
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
        Tienes la opción de permitir, bloquear o eliminar las cookies instaladas
        en tu equipo mediante la configuración de las opciones del navegador
        instalado en su equipo. Al desactivar cookies, algunos de los servicios
        disponibles podrían dejar de estar operativos. La forma de deshabilitar
        las cookies es diferente para cada navegador, pero normalmente puede
        hacerse desde el menú Herramientas u Opciones. También puede consultarse
        el menú de Ayuda del navegador dónde puedes encontrar instrucciones. El
        usuario podrá en cualquier momento elegir qué cookies quiere que
        funcionen en este sitio web. Puede usted permitir, bloquear o eliminar
        las cookies instaladas en su equipo mediante la configuración de las
        opciones del navegador instalado en su ordenador:
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
              "http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Internet Explorer o Microsoft Edge
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
              "https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Internet Explorer o Microsoft Edge
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
            Mozilla Firefox
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
            Google Chrome
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
            Safari
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
            Opera
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
        Declaración de cookies usadas en www.stable-life.com
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
        Se muestra entonces a continuación un listado de las cookies que se
        utilizarán en este sitio web.
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
        Aceptación de la Política de cookies
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
        Al utilizar el sitio web www.stable-life.com, se presume que usted
        acepta la Política de Cookies. Si embargo, se muestra información sobre
        el uso de cookies en nuestro sitio para su información
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
        Por ello, en el banner de información se muestran las siguientes
        opciones:
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
          Aceptar todas: No se volverá a visualizar este aviso al acceder a
          cualquier página del portal durante la presente sesión.
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
          Aceptar solo las escenciales: No se volverá a mostrar este aviso al
          acceder a cualquier página del portal durante la presente sesión, se
          aceptarán solo las cookies asociadas a reproducción de videos
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
          Más información: podrá obtener más información sobre qué son las
          cookies, conocer la Política de cookies de www.stable-life.com y saber
          como modificar la configuración de su navegador
        </ListItem>
      </List>
    </Box>
  );
};

export default CookiesList;
