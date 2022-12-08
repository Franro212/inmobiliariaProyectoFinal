import React from "react";

////////import componentes//////////////////////////
import Header from "../../Components/Header/Header";
import Main from "../../Components/main/Main";
import Servicios from "../../Components/servicios/Servicios";
import Footer from "../../Components/Footer/Footer";
import CardInmuebleHome from "../../Components/CardInmueble/CardInmueble";

import "./App.css";
import FormContact from "../../Components/FormContact/FormContact";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Servicios />
      </div>

      <div className="imgApp"></div>

      <div className="containerSectInmuebles">
        <div className="containerTitleSection">
          <h3 className="secSubtitle">Inmuebles</h3>
          <h2 className="secTitle">Últimos ingresos</h2>
        </div>
        <div className="containerCard">
          <CardInmuebleHome />
        </div>
        <div className="contBtnApp">
          <button className="btnRed btnVerMas">Ver más inmuebles</button>
        </div>
      </div>

      <div className="containerSectContact">
        <div className="containerTitleSection">
          <h3 className="secSubtitle">Contacto</h3>
          <h2 className="secTitle">¿Tienes alguna duda?</h2>
            <p className="description">
              Sus comentarios y sugerencias son importantes para poder mejorar
              nuestra atención, gracias por contactarnos
            </p>
        </div>


          <div className="containerFormContact">
            <div className="imgContact">
              <img src="/assets/mapa.png" alt="" className="imgMap"/>
            </div>
            

            <FormContact />
            
          </div>
    
      </div>

      <Footer />
    </>
  );
}

export default App;
