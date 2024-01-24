import React from 'react';
import ReactDOM from 'react-dom/client';
import '../style.css';
import { RouterProvider } from "react-router-dom";
//import App from './App';
import router from './routing/routes';







ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>


    {/* <BrowserRouter>

      <App />

    </BrowserRouter> */}
    <RouterProvider router={router} />



  </React.StrictMode>,
)
