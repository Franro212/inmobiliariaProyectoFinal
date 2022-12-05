import React from "react";
import ListUsers from "../../Components/ComponentsUser/ListUsers/ListUsers"
import NameUser from "../../Components/ComponentsUser/NameUser/nameUser";
import RegisterUser from "../../Components/ComponentsUser/RegisterUser/RegisterUser";

import "./homeAdmin.css";

function HomeAdmin() {
  return (
    
      <div className="homeAdminContainer">
        <header className="headerAdmin">
          <a href="/">
            <img className="logoAdm" src="assets/logoSinFondoSencillo.png" alt="logo" />
          </a>
          <div className="contUser">
            <NameUser />
          </div>
        </header>
      

      <section className="titleAdmin">
        <h3 className="welcomeTitle">
          Bienvenido, {""}
          <span className="spanRed">
            <NameUser />
          </span>
        </h3>
        <h1>Tablero administrativo</h1>
      </section>
      <section className="admInmuebles">
        <h2 className="subtitleAdm">Inmuebles</h2>
        <div className="containerAdmUser">

        <ListUsers/>
        <RegisterUser/>
        </div>
      </section>


        <hr />
      <section className="admUser">
        <h2 className="subtitleAdm">Usuarios</h2>
        <div className="containerAdmUser">

        <ListUsers/>
        <RegisterUser/>
        </div>
      </section>

    </div>
  );
}

export default HomeAdmin;
