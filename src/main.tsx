import React from 'react';
import ReactDOM from 'react-dom/client';
import '../style.css';
import { BrowserRouter } from "react-router-dom";
//import router from './routing/router';
import App from './App';






ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)
