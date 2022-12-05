import React, { useState } from "react";
import {registrarUsuario} from '../../../Api/Rule_user';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";


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
    <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Nuevo usuario
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            
              <div className="container-form ctn-form">
            <form className="form" onSubmit={handleSubmit}>
              <h2 className="title-form">Añadir nuevo usuario</h2>

              <label>
                <input
                  className="input-form"
                  placeholder="Nombre"
                  type="text"
                  value={name}
                  onChange={handleName}
                />
              </label>

              <br />

              <label>
                <input
                  className="input-form"
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
                  className="input-form"
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
                  className="input-form"
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

              <div className="container-btn">
                <button className="btn" type="submit">
                  Añadir usuario
                </button>
              </div>
            </form>
          </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
  

  </>
  )
}

export default RegisterUser