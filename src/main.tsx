import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import AppRouter from './routes/AppRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
