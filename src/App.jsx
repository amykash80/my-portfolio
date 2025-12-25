import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import Navbar from './components/navbar'; 
import Hero from './sections/Hero';
import Projects from './sections/projects';
import Skills from './sections/skills';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // Modern Blue
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;