import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeContextProvider, { ThemeContext } from './contexts/ThemeContext';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Chart from './Components/Chart';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import Settings from './pages/Settings';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import getTheme from './theme';


const MainContent = () => {
  const { mode } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <Router>
        <Topbar handleDrawerToggle={handleDrawerToggle} />
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` }, marginTop: 8 }}
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/chart" element={<Chart />} />

          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeContextProvider>
      <MainContent />
    </ThemeContextProvider>
  );
};

export default App;
