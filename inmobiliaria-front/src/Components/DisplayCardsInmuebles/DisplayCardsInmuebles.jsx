import React from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import "./displaycardsinmuebles.css";
import "../CardInmueble/cardInmueble.css";

function DisplayCardsInmuebles({ Inmuebles }) {
  // const objetoInmueble = Inmuebles;
  // const CardsDisplayed = (objetoInmueble) => {};

  return (
    <>
      <div className="cardConteiner">
        {Inmuebles &&
          Inmuebles.map((inmueble, index) => {
            return (
              <div className="contCard" key={index}>
                <div className="contImg">
                  <img className="imgCard" src="/assets/casa1.jpeg" alt="" />
                  <span className="tipoOperacion">
                    {inmueble.tipo_operacion}
                  </span>
                </div>
                <div className="contContenido">
                  <p>Departamento: {inmueble.departamento}</p>
                  <p className="precio"> U$S{inmueble.precio}</p>
                  <hr />
                  <div className="especificaciones">
                    <p>
                      <FaBed className="icono"/>
                      {inmueble.dormitorio}
                    </p>
                    <p>
                      <FaBath className="icono" />
                      {inmueble.banio}
                    </p>
                    <p>
                      <FaRulerCombined className="icono" />
                      {inmueble.m2_terreno}m2
                    </p>
                  </div>
                  <p>Tipo de Inmueble: {inmueble.tipo_inmueble}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default DisplayCardsInmuebles;
