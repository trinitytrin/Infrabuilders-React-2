import React from 'react';
import ReactDOM from 'react-dom/client';

import '../style.css';
import '../public/css/responsive.css';
import '../public/css/elements.css';
import '../public/css/custom.css';
// import { BrowserRouter } from "react-router-dom";
//import router from './routing/routes';
import App from './App';





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>


    <App />

    {/* <RouterProvider router={router} /> */}


  </React.StrictMode>,
)
