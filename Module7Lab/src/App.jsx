import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { EmojiProvider } from './contexts/EmojiContext';
import { muiTheme } from './theme/muiTheme';
import MUILayout from './components/Lab5/MUILayout';
import MUIHomePage from './pages/Lab5/MUIHomePage';
import MUILoginForm from './components/Lab5/MUILoginForm';
import BitcoinRatesPage from './pages/BitcoinRatesPage';
import PostList from './components/Lab5/PostList';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <EmojiProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<MUILayout />}>
                <Route index element={<MUIHomePage />} />
                <Route path="login" element={<MUILoginForm />} />
                <Route path="bitcoin-rates" element={<BitcoinRatesPage />} />
                <Route path="posts" element={<PostList />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </EmojiProvider>
    </ThemeProvider>
  );
}

export default App;
