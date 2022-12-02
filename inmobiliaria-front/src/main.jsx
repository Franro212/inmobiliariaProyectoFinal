import React from 'react';
import ReactDOM from 'react-dom/client';

// ============ IMPORT ROUTE ===============
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './Routes/App/App';
import HomeAdmin from './Pages/HomeAdmin/HomeAdmin.jsx';
import PageLogin from './Pages/PageLogin/PageLogin';




// ============ STYLE ===============
import './index.css'

const router = createBrowserRouter([

{
  path: "/",
  element: <App />,
},

{
  path: "pageLogin",
  element: <PageLogin />,
},

{
  path: "homeAdmin",
  element: <HomeAdmin />,
},

]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);