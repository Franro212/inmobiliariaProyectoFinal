import React from 'react';
import { Link } from "react-router-dom";
import './main.css';


function Main() {
  return (
    
      
    <div className='mainContainer'>
        <div className='containerMainText'>
            <h1 className='titleMain'>Encuentra <span className='spanRed'>la mejor propiedad,</span> nosotros te acompañamos</h1>
            <p className='txtMain'>Respaldo, seguridad y confianza. Ofrecemos un servicio integral, profesional y serio, logrando el objetivo propuesto al cliente.</p>
<<<<<<< HEAD
            <Link to={`buscador/`}><button className="btnMain">Buscar propiedades</button> </Link>
=======
            <button className="btnRed btnMain">Buscar propiedades</button>
>>>>>>> 75185e8752f67400dbe2f0ca478868838b17ce67
        </div>
        <div className='contIconos'>
        <a href="mailto:contacto@inmobiliariarossi.com.uy"><img className='iconoStatic' src="../public/assets/gmail.png" alt="" /></a>
        <a href="https://wa.me/+59899867688"><img className='iconoStatic' src="../public/assets/whatsapp.png" alt="" /></a>
        </div>
    </div>
    
   
  
    
  )
}

export default Main;