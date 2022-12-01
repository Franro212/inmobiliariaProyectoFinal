import React from 'react';
import ReactDOM from 'react-dom/client';

// ============ IMPORT ROUTE ===============
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import HomeAdmin from './Components/HomeAdmin.jsx/HomeAdmin';
import Login from './Components/Login/Login';
import BuscadorPage from './Components/BuscadorPage/BuscadorPage';

// ============ STYLE ===============
import './index.css'

const router = createBrowserRouter([

{
  path: "/",
  element: <App />,
},

{
  path: "login",
  element: <Login />,
},

{
  path: "homeAdmin",
  element: <HomeAdmin />,
},

{
  path: "buscador",
  element: <BuscadorPage/>,
},

]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);