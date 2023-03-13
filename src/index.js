import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './context/context';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
  </BrowserRouter>
);


