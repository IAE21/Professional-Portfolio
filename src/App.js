import 'App.css';

import { useEffect } from "react";

// react-router components
import { Routes, Route, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "assets/theme";

import Landing from 'pages/landing/Landing';
import Projects from 'pages/projects/Projects';
import Contact from 'pages/contact/Contact'
import AboutMe from 'pages/about-me/AboutMe';
import Weather from 'pages/weather/Weather';
import Forecast from 'pages/weather/Forecast/Forecast';



function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/weather/forecast" element={<Forecast />} />
          <Route path="/weather/forecast/*" element={<Forecast />} />
          <Route path="*" element={<Landing />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
