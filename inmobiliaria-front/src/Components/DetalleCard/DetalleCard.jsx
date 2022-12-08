
import React, { useEffect } from 'react';
import {useState} from 'react';import './detalleCard';
import {buscarById} from '../../Api/Rule_auth_inmobiliaria';
import Header from '../Header/Header';
import './DetalleCard.css';
import Footer from '../footer/Footer';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



function DetalleCard() {
    const[datosIniciales,setDatosIniciales] = useState([]);
    const { id_inmueble } = useParams();

        useEffect(()=>{
            buscarById(id_inmueble)
          .then((response)=> {
              setDatosIniciales(response);
          })
          .catch((error)=>{
              alert(error);
          });
          },[]);


    const inmuebleDetail = [...datosIniciales]?.filter((arrayDatos) => {
            return arrayDatos.id_inmueble === id_inmueble;
          });

    const inmuebleIndex = datosIniciales?.findIndex((arrayDatos) => {
         return arrayDatos.id_inmueble === id_inmueble;
     });
     console.log("aqui se imprimi el inmuebleDetail: ", inmuebleDetail[0]);
     console.log("aqui se imprimi el inmuebleIndex: ", inmuebleIndex);
     console.log('datos Indiciales: ',{...datosIniciales[0]});
     console.log("datos Iniciales todo objecto: ", datosIniciales)

  return (

    <div>
         <div><Header/></div>
        <div className="inmuebleCardContainer">
        Aquí va la descripcion del Card
        {/* <p>Operación: {inmuebleDetail[0].tipo_operacion}</p> */}
        {/* <p>Precio: {inmuebleDetail[0].precio}</p> */}
        <Link to={`/BuscadorPage`}><p>Buscador</p></Link>
        <p>Anterior</p>
        {/* <Link to={`/BuscadorPage/detalleInmueble/${datosIniciales[0].id_inmueble +1}`}><p>Siguiente</p> </Link> */}
        </div>
        <div><Footer/></div>
    </div>
  )
}

export default DetalleCard;