"use client";
import React, { useState, useEffect, useRef } from "react";
import { Paper, Typography, TextField, IconButton, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import UserMessage from "./userMessage";
import { FaRobot } from "react-icons/fa";
import IAMessage from "./AiMessage";
import TypingIndicator from "./Dots";
import generateToken from "../../../utils/generateToken";
import { useTranslation } from "react-i18next";
const ChatWindow = () => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([
    /* { type: "user", text: "Hola, ¿cómo estás?" }, */
  ]);

  const token = generateToken();
  const [loading, setLoading] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    // Verificar si ya se ha enviado el mensaje inicial de la IA
    console.log(process.env.NEXT_PUBLIC_API_MESSAGES);
    if (messages.length === 0) {
      setLoading(true);
      setShowTyping(true);
      setTimeout(() => {
        setMessages([
          {
            type: "ai",
            text: t("welcome"),
          },
        ]);
        setLoading(false);
        setShowTyping(false);
      }, 2000);
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: inputValue },
    ]);
    setInputValue("");
    setLoading(true);
    setShowTyping(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_MESSAGES}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt: inputValue }),
      });

      const data = await response.json();
      if (data.result) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "ai", text: data.result },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "ai", text: t("error") },
        ]);
      }
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "ai", text: t("error") },
      ]);
    } finally {
      setLoading(false);
      setShowTyping(false);
    }
  };

  const Message = ({ type, text, isNew }) => {
    return (
      <Box
        sx={{
          animation: isNew ? "fadeInUp 0.5s ease-out" : "none",
          "@keyframes fadeInUp": {
            "0%": {
              opacity: 0,
              transform: "translateY(20px)",
            },
            "100%": {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
        {type === "user" ? (
          <UserMessage text={text} />
        ) : (
          <IAMessage text={text} />
        )}
      </Box>
    );
  };

  return (
    <Paper
      elevation={13}
      sx={{
        transform: { xs: "translateY(-3vh)", sm: "translateY(-3vh)" },
        width: { xs: "90vw", sm: "auto" },
        height: { xs: "60vh", sm: "50vh" },
        position: { xs: "absolute", sm: "relative" },
        top: { xs: "-56vh", sm: "auto" },
        margin: { xs: "0 auto", sm: "auto" },
        borderRadius: "10px",
        zIndex: 10,
        paddingBottom: { xs: "1rem", sm: "0" },
      }}
    >
      <Box
        sx={{
          bgcolor: "#20201f",
          padding: "0.5rem 1rem",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          borderRadius: "5px 5px 0 0",
        }}
      >
        <FaRobot size="2rem" color="#fff" />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "unset",
            padding: "0.5rem 1rem",
          }}
        >
          SIA (Stable AI)
        </Typography>
      </Box>

      <Box
        sx={{
          padding: "1rem 1rem",
          gap: "0.8rem",
          height: "80%",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
          scrollbarWidth: "none",
          marginBottom: "1vh",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {messages.map((message, index) => (
          <Message
            key={index}
            type={message.type}
            text={message.text}
            isNew={index === messages.length - 1 && loading}
          />
        ))}
        {showTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </Box>

      {/* TEXT FIELD */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5rem 0.5rem",
          bgcolor: "#20201F",
          position: "absolute",
          bottom: 0,
          width: "100%",
          borderRadius: "0 0 5px 5px",
        }}
      >
        <TextField
          variant="outlined"
          multiline
          fullWidth
          size="small"
          value={inputValue}
          placeholder="Escribe un mensaje..."
          className="chat-input-field"
          InputProps={{
            sx: {
              color: "white",
              fontFamily: "unset",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
                borderRadius: "5px",
              },
            },
          }}
          onChange={(e) => {
            handleChange(e);
            //setShowTyping(true)}}
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (inputValue.trim().length > 0) {
                e.preventDefault();
                handleSendMessage();
              } else {
                e.preventDefault(); // Para evitar el salto de línea en el campo multiline
              }
            }
          }}
        />
        <IconButton
          color="primary"
          onClick={handleSendMessage}
          disabled={inputValue === "" ? true : false}
        >
          <SendIcon
            sx={{
              color: "white",
              transform: "rotate(-45deg)",
            }}
          />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatWindow;
