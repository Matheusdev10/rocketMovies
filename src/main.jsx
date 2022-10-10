import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import Input from './Components/Input';
import SignUp from './pages/SignUp';
import { Profile } from './pages/Profile';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>
);
