import React from "react";
import './formContact.css'

function FormContact() {
  return (
    <div>
      <div className="containerLogin">
        <form className="formContact">

          <label>
            <input
              className="inputForm"
              placeholder="Nombre"
              required
              type="text"
            />
          </label>

          <br />

          <label>
            <input
              className="inputForm"
              placeholder="Email"
              required
              type="email"
           
            />
          </label>

          <br />

          <label>
            <textarea
              className="inputForm"
              maxlength='1000'
            minlength='100'
              placeholder="Deja tu consulta aquí"
              required
              type="TextArea"
           
            />
          </label>

          <br />
          <br />
          <input className="btnLogin" type="submit" value="Enviar"/>
        </form>
      </div>
    </div>
  );
}

export default FormContact;
