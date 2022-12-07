import React from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import "./displaycardsinmuebles.css";
import "../CardInmueble/cardInmueble.css";

function DisplayCardsInmuebles({ Inmuebles }) {
  // const objetoInmueble = Inmuebles;
  // const CardsDisplayed = (objetoInmueble) => {};

  return (
    <div className="cardsContainer">
      <ul className="cardContainer wrap">
        {Inmuebles &&
          Inmuebles.map((inmueble, index) => {
            return (
              <li className="contCardDisplayInmuebles" key={index}>
                <div className="contImg">
                  <img className="imgCard" src="/assets/casa1.jpg" alt="" />
                  <span className="tipoOperacion">
                    {inmueble.tipo_operacion}
                  </span>
                </div>
                <div className="contContenido">
                  <p>Departamento: {inmueble.departamento}</p>
                  <p className="precio"> U$S{inmueble.precio.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</p>
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
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default DisplayCardsInmuebles;
