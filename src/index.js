import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from './resource/style/Theme';
import GlobalStyle from './resource/style/GlobalStyle';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { dataApi } from './apis/dataApi';
import logger from 'redux-logger';
import rootReducer from './modules/rootReducer';
import axios from 'axios';

axios.defaults.baseURL = 'https://server.inuappcenter.kr/';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
    reducer: {
        ...rootReducer,
        [dataApi.reducerPath]: dataApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dataApi.middleware, logger),
    devTools: process.env.NODE_ENV !== 'production',
});

root.render(
    <Provider store={store}>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </StyledEngineProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
