import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import SignIn from './pages/SignIn';
import { Home } from './pages/Home';
import { MoviePreview } from './pages/MoviePreview';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MoviePreview />
    </ThemeProvider>
  </React.StrictMode>
);
