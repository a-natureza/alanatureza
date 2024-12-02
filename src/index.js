// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import depuis 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // Import du BrowserRouter
import store from './store';
import App from './App';
import './index.css';

const container = document.getElementById('root');

// Créez un root avec ReactDOM.createRoot
const root = ReactDOM.createRoot(container);

// Rendre l'application avec createRoot et BrowserRouter
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
