import React, { useState } from "react";
import { registrarUsuario } from "../../../Api/Rule_user";

function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tipoUser, setTipoUser] = useState("");
  

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleTipoUser = (e) => {
    setTipoUser(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credenciales = {
      email: email,
      password: password,
      nombre: name,
      tipo_usuario: tipoUser,
    };

    await registrarUsuario(credenciales)
      .then(() => {
        alert("Usuario registrado");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <form  onSubmit={handleSubmit}>
        <label>
          <input
           
            placeholder="Nombre"
            type="text"
            value={name}
            onChange={handleName}
          />
        </label>

        <br />

        <label>
          <input
          
            placeholder="Email"
            required
            type="email"
            value={email}
            onChange={handleEmail}
          />
        </label>

        <br />

        <label>
          <input
       
            placeholder="Password"
            required
            autoComplete="none"
            type="password"
            value={password}
            onChange={handlePassword}
          />
        </label>

        <label>
          <input
    
            placeholder="Tipo de usuario"
            required
            autoComplete="none"
            type="text"
            value={tipoUser}
            onChange={handleTipoUser}
          />
        </label>

        <br />
        <br />

     
          <button className="btn" type="submit">
            Añadir usuario
          </button>
 
      </form>
    </>
  );
}

export default RegisterUser;
