import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { MoviePreview } from './pages/MoviePreview';
import { CreateMovie } from './pages/CreateMovie';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CreateMovie />
    </ThemeProvider>
  </React.StrictMode>
);
