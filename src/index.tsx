import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './App';
import { MatchesContextProvider } from './context/MatchesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MatchesContextProvider>
        <App />
      </MatchesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
