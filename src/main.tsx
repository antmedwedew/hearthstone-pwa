import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from '@pages/home/Home.tsx';
import PWABadge from '@ui/pwa-bage/PWABadge.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <PWABadge />
  </React.StrictMode>,
);
