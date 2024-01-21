import React from 'react';
import ReactDOM from 'react-dom/client';
import '../style.css';
import { BrowserRouter, RouterProvider } from "react-router-dom";
//import router from './routing/router';
import App from './App';
import router from './routing/routes';






ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}

  </React.StrictMode>,
)
