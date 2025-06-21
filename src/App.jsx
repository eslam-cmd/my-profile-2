import "./App.css";
import Header from "./Ultimits/header";
import FooterSection from "./Ultimits/footer";
import MainSection from "./Pages/mainsection";
import ProjectSection from "./Pages/project";
import ToolsSection from "./Pages/ToolsSection";
import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/contactsection";
import Backdrop from "@mui/material/Backdrop";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "url('dark.png')" : "url('light.png')",
      },
      text: { primary: darkMode ? "#AAA" : "#282828" },
    },
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 1500);
  }, []);

  useEffect(() => {
    document.body.style.background = darkMode
      ? "url('dark.png')" 
      : "url('light.png')";
    document.body.style.color = darkMode ? "#AAA" : "#282828";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.transition = "background 0.5s ease-in-out"; 

   
    if (!darkMode) {
      const blurLayer = document.createElement("div");
      blurLayer.style.position = "absolute";
      blurLayer.style.top = "0";
      blurLayer.style.left = "0";
      blurLayer.style.width = "100%";
      blurLayer.style.height = "100%";
      blurLayer.style.backdropFilter = "blur(5px)"; 
      blurLayer.style.zIndex = "-1";

      document.body.appendChild(blurLayer);

      return () => document.body.removeChild(blurLayer); 
    }
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading && (
        <Backdrop open={loading} sx={{ color: "#fff", zIndex: 9999 }}>
          <div className="loading-container">
            <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
              <circle
                className="pl__ring pl__ring--a"
                cx="120"
                cy="120"
                r="105"
                fill="none"
                stroke="#000"
                strokeWidth="20"
                strokeDasharray="0 660"
                strokeDashoffset="-330"
                strokeLinecap="round"
              ></circle>
              <circle
                className="pl__ring pl__ring--b"
                cx="120"
                cy="120"
                r="35"
                fill="none"
                stroke="#000"
                strokeWidth="20"
                strokeDasharray="0 220"
                strokeDashoffset="-110"
                strokeLinecap="round"
              ></circle>
              <circle
                className="pl__ring pl__ring--c"
                cx="85"
                cy="120"
                r="70"
                fill="none"
                stroke="#000"
                strokeWidth="20"
                strokeDasharray="0 440"
                strokeLinecap="round"
              ></circle>
              <circle
                className="pl__ring pl__ring--d"
                cx="155"
                cy="120"
                r="70"
                fill="none"
                stroke="#000"
                strokeWidth="20"
                strokeDasharray="0 440"
                strokeLinecap="round"
              ></circle>
            </svg>
          </div>
        </Backdrop>
      )}
      {!loading && (
        <>
          <Header toggleTheme={toggleTheme} darkMode={darkMode} />
          <MainSection />
          <ToolsSection />
          <ProjectSection />
          <Contact />
          <FooterSection />
        </>
      )}
    </ThemeProvider>
  );
}
