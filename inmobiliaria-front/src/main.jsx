import React from 'react';
import ReactDOM from 'react-dom/client';

// ============ IMPORT ROUTE ===============
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ============ IMPORT COMPONENTS ===============
import App from './Routes/App/App';
import HomeAdmin from './Pages/HomeAdmin/HomeAdmin.jsx';
import PageLogin from './Pages/PageLogin/PageLogin';
import GestionUsuarios from './Pages/GestionUsuarios/GestionUsuarios';
import GestionPublicaciones from './Pages/GestionPublicaciones/GestionPublicaciones';
import BuscadorPage from  './Components/BuscadorPage/BuscadorPage';
import DetalleCard from './Components/DetalleCard/DetalleCard';



// ============ STYLE ===============
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Empresa from './Components/Empresa/Empresa';
import Servicios from './Components/servicios/Servicios';
import FormContact from './Components/FormContact/FormContact';
import Estudio from './Components/Estudio/Estudio';

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

{
  path: "gestionUsuarios",
  element: <GestionUsuarios />,
},

{
  path: "gestionPublicaciones",
  element: <GestionPublicaciones />,
},
{
  path: "buscador",
  element: <BuscadorPage/>
},
{
  path: "empresa",
  element: <Empresa/>
},
{
  path: "estudio",
  element: <Estudio/>
},

{
  path: "buscadorPage",
  element: <BuscadorPage/>,
},
{
  path: "buscadorPage/detalleInmueble/:id_inmueble",
  element: <DetalleCard />,
},


]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ChakraProvider>
      <RouterProvider router={router} />
      </ChakraProvider>
    </React.StrictMode>
);