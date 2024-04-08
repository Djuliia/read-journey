import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={'/read-journey'}>
        <ThemeProvider theme={theme}>
          <App />
          <Toaster />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
