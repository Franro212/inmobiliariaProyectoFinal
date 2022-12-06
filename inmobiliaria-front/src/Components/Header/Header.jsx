import { Link } from "react-router-dom";
import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        
<<<<<<< HEAD
            <a href="/"><img className='logo' src="/assets/logo.jpeg" alt="logo" /></a> 
=======
            <a href="/"><img className='logo' src="public\assets\logoSinFondo.png" alt="logo" /></a> 
>>>>>>> 75185e8752f67400dbe2f0ca478868838b17ce67
        
        <nav className='nav'>
            <ul className='navList'>
                <li className='liHeader'><a className='ancla' href="">Inicio</a></li>
                <li className='liHeader'><a className='ancla' href="">Empresa</a></li>
                <li className='liHeader'><a className='ancla' href="#servicios">Servicios</a></li>
                <li className='liHeader'><a className='ancla' href="">Estudio</a></li>
                <li className='liHeader'><a className='ancla' href="#contacto">Contacto</a></li>
            </ul>
        </nav>

        <Link to={"/pageLogin"}>
          <button className='btnGray'>Iniciar sesión</button>
        </Link>
    </div>
  )
}

export default Header