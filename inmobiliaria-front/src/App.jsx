import React from "react";
import Header from "./Components/Header/Header";
import Servicios from "./Components/servicios/Servicios";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";


import "./App.css";
import CardInmuebleHome from "./Components/CardInmueble/CardInmueble";

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

      <div className="containerSectInmuebles">
        <div className="containerTitleSection">
          <h3 className="secSubtitle">Inmuebles</h3>
          <h2 className="secTitle">Últimos ingresos</h2>
        </div>
        <div className="containerCard">
          <CardInmuebleHome />
          <CardInmuebleHome />
          <CardInmuebleHome />
          <CardInmuebleHome />
        </div>
        <div className="contBtnApp">

        <button className="btnVerMas">Ver más inmuebles</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
