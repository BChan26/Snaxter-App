import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Context } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
