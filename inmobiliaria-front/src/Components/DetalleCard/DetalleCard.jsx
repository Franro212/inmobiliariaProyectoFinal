import React, { useEffect } from 'react';
import {useState} from 'react';import './detalleCard';
import {buscarById} from '../../Api/Rule_auth_inmobiliaria';
import Header from '../Header/Header';
import './DetalleCard';
import Footer from '../footer/Footer';
import { Link  } from "react-router-dom";
import { useParams, useNavigate} from "react-router-dom";
import {MdScreenSearchDesktop} from "react-icons/md";



function DetalleCard() {
    const[datosIniciales,setDatosIniciales] = useState([]);
    const { id_inmueble } = useParams();
    const navigate = useNavigate();

   

        useEffect(()=>{
            buscarById(id_inmueble)
          .then((response)=> {
              setDatosIniciales(response);
          })
          .catch((error)=>{
              alert(error);
          });
          },[]);
    
    // const params = useParams();

    // const navigateToContacts = () => {
        
    //   navigate(+1);
     
    //     };   
    //     const handleNavigation = () => {
    //       navigate("/BuscadorPage/detalleInmueble/28");
    //       console.log('id: es ',datosIniciales[0].id_inmueble+1)
    //     };
        

    const inmuebleDetail = datosIniciales?.filter((arrayDatos) => {
            return arrayDatos.id_inmueble == id_inmueble;
          });

    const inmuebleIndex = datosIniciales?.findIndex((arrayDatos) => {
         return arrayDatos.id_inmueble == id_inmueble;
     });
     console.log("aqui se imprimi el inmuebleDetail: ", inmuebleDetail[0]);
     console.log("aqui se imprimi el inmuebleIndex: ", inmuebleIndex );
     console.log("aqui se imprime el id_inmueble: ", id_inmueble);
     console.log("datos Iniciales todo objecto: ", datosIniciales[0]);
     console.log('Inmueble Detail: ',inmuebleDetail[0]);
     

  return (

    <div>
         <div><Header/></div>
        <div className="inmuebleCardmain"> 
        <div className="inmuebleCardContainer">
        Descripcion del Card 
        { datosIniciales.length!=0 && 
        <p>Precio: {datosIniciales[0].precio} </p>
         }
        {datosIniciales.length!=0 && <img src={`http://localhost:8000/api/inmuebles/photo/${datosIniciales[0].id_inmueble}`}></img>}
 
        {datosIniciales.length!=0 && <p>Tipo de Operación: {datosIniciales[0].tipo_operacion} </p>}
        {datosIniciales.length!=0 && <p>id_inmueble: {datosIniciales[0].id_inmueble} </p>}
        {datosIniciales.length!=0 && <p className="ubicacionElement">Dirección: {datosIniciales[0].direccion} </p>}
        {datosIniciales.length!=0 && <p className="ubicacionElement">Ciudad: {datosIniciales[0].ciudad} </p>}
        {datosIniciales.length!=0 && <p className="ubicacionElement">Departamento: {datosIniciales[0].departamento} </p>}

        <div className="bloqueDeCambioDePaginas">
        <Link to={`/BuscadorPage`}><MdScreenSearchDesktop className="icono"/><p>Regresar al Buscador</p></Link>
        
        {/* // <Link to={`/BuscadorPage/detalleInmueble/${datosIniciales[0].id_inmueble+1}`}><p>Siguiente</p> </Link>  */}
        {/* { datosIniciales.length!=0  && 
        <button onClick={handleNavigation}>Siguiente</button> } */}
       
        </div>
        </div>
        </div>

        <div><Footer/></div>
    </div>
  )
}

export default DetalleCard;