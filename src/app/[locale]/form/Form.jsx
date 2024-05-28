"use client";
import React from "react";
import Flag from "react-world-flags";
import { validateInput } from "../../../../utils/validators";
import {
  Box,
  Typography,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  Button,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";

import Link from "next/link";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const countryCodes = [
  { code: "+57", country: "col" },
  { code: "+1", country: "usa" },

  // Agrega más códigos según sea necesario
];
const Form = () => {
  const defaultInput = {
    name: "",
    email: "",
    code: "",
    phone: "",
    terms: false,
  };

  const [input, setInput] = useState(defaultInput);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "terms") {
      setInput({
        ...input,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
    setErrors(validateInput(input));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        padding: { xs: "1rem 2rem", md: "3rem 10rem" },
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #20201F, black)",
      }}
    >
      <Typography
        sx={{
          width: "100%",
          color: "white",
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: "bold",
          marginTop: { md: "0rem" },
          fontFamily: "unset",
          textAlign: "center",
          lineHeight: { xs: "3rem" },
        }}
      >
        ¡Únete a la revolución financiera!
      </Typography>

      <Typography
        sx={{
          color: "white",
          fontSize: "1rem",
          textAlign: "left",
          marginTop: "1rem",
          fontFamily: "unset",
        }}
      >
        Queremos que seas el primero en disfrutar las nuevas funciones y
        servicios de Stable®. Completa el siguiente formulario para unirte a la
        lista de espera y recibir nuestras novedades.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          textAlign: "left",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "1.5rem",
            marginTop: "1rem",
            fontFamily: "unset",
            alignItems: "flex-start",
            textDecoration: "underline",
            textDecorationThickness: "2%",
            textUnderlineOffset: "10px",
          }}
        >
          Datos personales
        </Typography>
      </Box>

      {/* FORM */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: { xs: "0.5rem", md: "1rem" },
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: { xs: "0.5rem", md: "1rem" },
            textAlign: "left",
          }}
        >
          {/* NAME */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              width: { xs: "100%", md: "50%" },
              textAlign: "left",
            }}
          >
            <InputLabel
              sx={{
                color: "white",
                fontSize: { xs: "1.1rem", md: "1.5rem" },
                fontWeight: { xs: "none", md: "bold" },
                marginTop: "1rem",
                fontFamily: "unset",
                alignItems: "flex-start",
              }}
            >
              Nombre *
            </InputLabel>

            <FormControl
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                textAlign: "left",
              }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                size="small"
                name="name"
                value={input.name}
                onChange={handleChange}
                error={errors.name}
                InputProps={{
                  endAdornment: errors.name && errors.name !== "" && (
                    <InputAdornment position="start">
                      <WarningAmberIcon sx={{ color: "red" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  fontSize: "1.5rem",
                  marginTop: "1rem",
                  fontFamily: "unset",
                  alignItems: "flex-start",
                  textDecoration: "underline",
                  textDecorationThickness: "2%",
                  textUnderlineOffset: "10px",

                  "& .MuiInputLabel-root": {
                    color: "white",
                    borderRadius: "10px",

                    fontSize: "1rem",
                  },

                  "& .MuiInputBase-input": {
                    color: "white",
                    fontFamily: "unset",
                  },

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(125, 204, 161, 1)",
                      borderRadius: "10px",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: !errors.name
                        ? "rgba(125, 204, 161, 1)"
                        : "red",
                    },
                  },

                  "& .MuiInputBase-input": {
                    color: "white",
                    fontFamily: "unset",
                  },
                }}
                placeholder="Escribe acá"
              />
            </FormControl>

            {errors.name && errors.name !== undefined && (
              <FormHelperText
                sx={{
                  color: "red",

                  fontFamily: "unset",
                }}
              >
                {errors.name}
              </FormHelperText>
            )}
          </Box>

          {/* NUMBER */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: { xs: "100%", md: "50%" },
              textAlign: "left",
              gap: "1rem",
            }}
          >
            <InputLabel
              sx={{
                color: "white",
                fontSize: { xs: "1.1rem", md: "1.5rem" },
                fontWeight: { xs: "none", md: "bold" },
                marginTop: "1rem",
                fontFamily: "unset",
                alignItems: "flex-start",
                textDecoration: "underline",
                textDecorationThickness: "2%",
                textUnderlineOffset: "10px",
              }}
            >
              Número de teléfono *
            </InputLabel>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                textAlign: "left",
              }}
            >
              <FormControl
                variant="outlined"
                size="small"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // Distribuir los elementos con espacio entre ellos
                  alignItems: "center",
                  width: "100%", // Ajustamos el ancho para un mejor alineamiento
                }}
              >
                <InputLabel
                  id="country-code-label"
                  sx={{
                    color: "gray",
                    "&.Mui-focused": {
                      color: "white",
                    },
                  }}
                >
                  Code
                </InputLabel>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      //justifyContent: "center",
                      alignItems: "left",
                      width: "25%",
                    }}
                  >
                    <Select
                      labelId="country-code-label"
                      id="country-code-select"
                      value={input.code}
                      size="small"
                      onChange={handleChange}
                      name="code"
                      label="Code"
                      inputProps={{
                        MenuProps: {
                          PaperProps: {
                            sx: {
                              backgroundColor: "#20201F",
                              color: "white",
                              borderRadius: 0,
                              border: "1px solid rgba(125, 204, 161, 1)",
                            },
                          },
                        },
                      }}
                      sx={{
                        fontSize: "1rem",
                        width: "100%",
                        fontFamily: "unset",
                        borderBlockColor: !errors.code
                          ? "rgba(125, 204, 161, 1)"
                          : "red",
                        borderRadius: "10px",
                        color: "white",

                        "&.Mui-focused": {
                          color: "gray",
                        },
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: !errors.code
                              ? "rgba(125, 204, 161, 1)"
                              : "red",
                            borderRadius: "10px",
                            color: "white",
                          },
                        },

                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: !errors.code
                            ? "rgba(125, 204, 161, 1)"
                            : "red",
                          color: "white",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "rgba(125, 204, 161, 1)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "white",
                        },
                      }}
                    >
                      {countryCodes.map((item) => (
                        <MenuItem key={item.code} value={item.code}>
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "1rem",
                            }}
                          >
                            <Box
                              sx={{
                                width: "100%",
                              }}
                            >
                              <Flag code={item.country} />
                            </Box>

                            <Typography
                              sx={{
                                fontSize: "1rem",
                                fontFamily: "unset",
                                color: "white",
                              }}
                            >
                              {item.country.toUpperCase()}
                            </Typography>
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>

                    {errors.code && (
                      <FormHelperText
                        sx={{
                          width: "100%",
                          color: "red",
                          textAlign: "left",
                          fontFamily: "unset",
                        }}
                      >
                        {errors.code}
                      </FormHelperText>
                    )}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "left",
                      width: "80%",
                    }}
                  >
                    <TextField
                      value={input.phone}
                      fullWidth
                      name="phone"
                      id="outlined-basic"
                      type="number"
                      variant="outlined"
                      onChange={(e) => handleChange(e)}
                      size="small"
                      sx={{
                        fontSize: "1rem",
                        marginLeft: "1rem", // Espacio entre el Select y el TextField
                        fontFamily: "unset",
                        alignItems: "flex-start",
                        "& .MuiInputLabel-root": {
                          color: "white",
                          borderRadius: "10px",
                          fontSize: "1rem",
                        },
                        "& .MuiInputBase-input": {
                          color: "white",
                          fontFamily: "unset",
                        },

                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: !errors.name
                              ? "rgba(125, 204, 161, 1)"
                              : "red",
                            borderRadius: "10px",
                          },
                          "&:hover fieldset": {
                            borderColor: "white",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "rgba(125, 204, 161, 1)",
                          },
                        },
                      }}
                      placeholder="Escribe acá"
                    />{" "}
                    {errors.phone && (
                      <FormHelperText
                        sx={{ color: "red", fontFamily: "unset" }}
                      >
                        {errors.phone}
                      </FormHelperText>
                    )}
                  </Box>
                </Box>
              </FormControl>
            </Box>
          </Box>
        </Box>

        {/* EMAIL */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            textAlign: "left",
          }}
        >
          <InputLabel
            sx={{
              color: "white",
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              fontWeight: { xs: "none", md: "bold" },
              marginTop: "1rem",
              fontFamily: "unset",
              alignItems: "flex-start",
              textDecoration: "underline",
              textDecorationThickness: "2%",
              textUnderlineOffset: "10px",
            }}
          >
            Email *
          </InputLabel>

          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              textAlign: "left",
            }}
          >
            <TextField
              fullWidth
              id="outlined-basic"
              onChange={(e) => handleChange(e)}
              value={input.email}
              variant="outlined"
              name="email"
              InputProps={{
                endAdornment: errors.email && (
                  <InputAdornment position="end">
                    <WarningAmberIcon sx={{ color: "red" }} />
                  </InputAdornment>
                ),
              }}
              size="small"
              sx={{
                fontSize: "1.5rem",
                marginTop: "1rem",
                fontFamily: "unset",
                alignItems: "flex-start",
                textDecoration: "underline",
                textDecorationThickness: "2%",
                textUnderlineOffset: "10px",
                "& .MuiInputLabel-root": {
                  color: "white",
                  borderRadius: "10px",
                  fontSize: "1rem",
                },

                "& .MuiInputBase-input": {
                  color: "white",
                  fontFamily: "unset",
                },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: !errors.email
                      ? "rgba(125, 204, 161, 1)"
                      : "red",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: !errors.email
                      ? "rgba(125, 204, 161, 1)"
                      : "red",
                  },
                },

                "& .MuiInputBase-input": {
                  color: "white",
                  fontFamily: "unset",
                },
              }}
              placeholder="Escribe acá"
            />
          </FormControl>
          {errors.email && (
            <FormHelperText sx={{ color: "red", fontFamily: "unset" }}>
              {errors.email}
            </FormHelperText>
          )}
        </Box>

        {/* add info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "1.5rem",
              marginTop: "1rem",
              fontFamily: "unset",
              alignItems: "flex-start",
              textDecoration: "underline",
              textDecorationThickness: "2%",
              textUnderlineOffset: "10px",
            }}
          >
            Datos adicionales
          </Typography>

          <InputLabel
            sx={{
              color: "white",
              marginTop: "1rem",
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              fontWeight: { xs: "none", md: "bold" },
              fontFamily: "unset",
              alignItems: "flex-start",
              textDecoration: "underline",
              textDecorationThickness: "2%",
              textUnderlineOffset: "10px",
            }}
          >
            Algún comentario o sugerencia
          </InputLabel>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              textAlign: "left",
            }}
          >
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              size="small"
              sx={{
                fontSize: "1.5rem",
                marginTop: "1rem",
                fontFamily: "unset",
                alignItems: "flex-start",

                "& .MuiInputLabel-root": {
                  color: "white",
                  borderRadius: "10px",
                  fontSize: "1rem",
                },

                "& .MuiInputBase-input": {
                  color: "white",
                  fontFamily: "unset",
                },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(125, 204, 161, 1)",
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(125, 204, 161, 1)",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  fontFamily: "unset",
                },
              }}
              placeholder="Escribe acá"
            />
          </FormControl>

          <InputLabel
            sx={{
              color: "white",
              marginTop: "1rem",
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              fontWeight: { xs: "none", md: "bold" },
              fontFamily: "unset",
              alignItems: "flex-start",
              textDecoration: "underline",
              textDecorationThickness: "2%",
              textUnderlineOffset: "10px",
            }}
          >
            ¿Cómo te enteraste de nosotros?
          </InputLabel>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              position: "relative",
              textAlign: "left",
            }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              size="small"
              variant="outlined"
              autoWidth
              inputProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      backgroundColor: "#20201F",
                      color: "white",
                      marginTop: "1rem",
                      borderRadius: 0,
                      border: "1px solid rgba(125, 204, 161, 1)",
                      position: "absolute",
                      width: "50%", // Reduce el ancho de la lista a la mitad
                    },
                  },
                },
              }}
              sx={{
                fontSize: "1rem",
                marginTop: "1rem",
                fontFamily: "unset",
                alignItems: "flex-start",
                borderBlockColor: "rgba(125, 204, 161, 1)",
                borderRadius: "10px",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                position: "relative",
                width: "100%",
                color: "white",

                "&.Mui-focused": {
                  color: "white",
                },

                "& .MuiSvgIcon-root": {
                  color: "white",
                },

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(125, 204, 161, 1)",
                    borderRadius: "10px",
                    color: "white",
                  },
                },

                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(125, 204, 161, 1)",
                  color: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(125, 204, 161, 1)",
                },

                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              }}
            >
              <MenuItem value={10}>Social Media</MenuItem>
              <MenuItem value={20}>Youtube</MenuItem>
              <MenuItem value={30}>Other</MenuItem>
            </Select>
            );
          </FormControl>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          flexDirection: "row",
          justifyContent: "left",
          alignContent: { xs: "flex-start", md: "center" },
        }}
      >
        <Checkbox
          value={input.terms}
          name={"terms"}
          onChange={(e) => {
            handleChange(e);
          }}
          inputProps={{ "aria-label": "controlled" }}
          sx={{
            color: "rgba(125, 204, 161, 1)",
            "&.Mui-checked": {
              color: "rgba(125, 204, 161, 1)",
            },
          }}
        />
        <Typography
          sx={{
            fontSize: "1rem",
            fontFamily: "unset",
            color: "white",
            marginLeft: "0.5rem", // Añadido un margen izquierdo para separar el checkbox del texto
            textDecorationLine: "underline",
            textDecorationThickness: "2.5%",
            textUnderlineOffset: "1px",
          }}
        >
          <Link
            href="https://stable-app.notion.site/T-RMINOS-Y-CONDICIONES-DE-SERVICIO-STABLE-APP-f5f672984d364999b6114cc9d1144cb8"
            target="_blank"
            underline="none"
            sx={{
              color: "rgba(125, 204, 161, 1)",
              fontSize: "1rem", // Ajusta el tamaño de fuente del enlace para que coincida con el texto principal
              fontFamily: "unset",
              fontWeight: "bold",
            }}
          >
            Aceptas las políticas de privacidad
          </Link>
        </Typography>
      </Box>
      {input.terms === false && (
        <FormHelperText
          sx={{
            width: "100%",
            textAlign: "left",
            color: "red",
            fontFamily: "unset",
          }}
        >
          Debes aceptar los términos y condiciones para continuar
        </FormHelperText>
      )}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: { md: "center" },
          marginTop: "2rem",
        }}
      >
        <Button
          disabled={
            errors.name ||
            errors.email ||
            errors.code ||
            errors.phone ||
            errors.terms ||
            input === defaultInput
              ? true
              : false
          }
          sx={{
            padding: "0.5rem 1rem",
            backgroundColor: "rgba(125, 204, 161, 1)",
            border: "1px solid rgba(125, 204, 161, 1)",
            borderRadius: "0px",
            fontFamily: "unset",
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "none",
            color: "black",

            "&:hover": {
              color: "white",
              bgcolor: "transparent",
              border: "1px solid rgba(125, 204, 161, 1)",
            },
          }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
