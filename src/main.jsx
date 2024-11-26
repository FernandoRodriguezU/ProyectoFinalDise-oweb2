import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesComponent from './Routes';
import './index.css'; // Si tienes estilos globales
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesComponent />
  </React.StrictMode>
);