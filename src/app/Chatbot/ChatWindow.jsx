"use client";
import React, { useState, useEffect } from "react";
import { Paper, Typography, TextField, IconButton, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import UserMessage from "./UserMessage";
import { FaRobot } from "react-icons/fa";
import IAMessage from "./AiMessage";
import TypingIndicator from "./Dots";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    /* { type: "user", text: "Hola, ¿cómo estás?" }, */
  ]);
  const [loading, setLoading] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    // Verificar si ya se ha enviado el mensaje inicial de la IA
    if (messages.length === 0) {
      setLoading(true);
      setShowTyping(true);
      setTimeout(() => {
        setMessages([
          { type: "ai", text: "Hola, soy SIA. Estoy aquí para ayudarte." },
        ]);
        setLoading(false);
        setShowTyping(false);
      }, 2000);
    }
  }, []); // Ejecutar solo una vez al cargar el componente

  const handleSendMessage = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: inputValue },
    ]);
    setInputValue("");
    setLoading(true);
    setShowTyping(true);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "ai", text: "Aquí está tu respuesta." },
      ]);
      setLoading(false);
      setShowTyping(false);
    }, 2000);
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
      elevation={3}
      sx={{
        transform: "translateY(-2vh)",
        height: { xs: "60vh", sm: "50vh" },
        position: "relative",
        borderRadius: "10px",
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
          height: "75%",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
          scrollbarWidth: "none",
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
      </Box>
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
          size="small"
          value={inputValue}
          placeholder="Escribe un mensaje..."
          className="chat-input-field"
          InputProps={{
            sx: {
              color: "white",
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
              handleSendMessage();
            }
          }}
        />
        <IconButton color="primary" onClick={handleSendMessage}>
          <SendIcon
            sx={{
              color: "white",
            }}
          />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatWindow;
