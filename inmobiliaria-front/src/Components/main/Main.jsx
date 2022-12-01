import React from 'react';
import { Link } from "react-router-dom";
import './main.css';


function Main() {
  return (
    <div className='mainContainer'>
        <div className='containerMainText'>
            <h1 className='titleMain'>Encuentra <span className='red'>la mejor propiedad,</span> nosotros te acompañamos</h1>
            <p className='txtMain'>Respaldo, seguridad y confianza. Ofrecemos un servicio integral, profesional y serio, logrando el objetivo propuesto al cliente.</p>
            <Link to={`buscador/`}><button className="btnMain">Buscar propiedades</button> </Link>
        </div>


        <div className="containerMainImage">
          <img className='imgMain' src="public/assets/casaMain.jpg" alt="" />
       

        </div>
    </div>
  )
}

export default Main;