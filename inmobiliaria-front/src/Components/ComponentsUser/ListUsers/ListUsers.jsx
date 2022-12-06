import React, { useState, useEffect } from "react";
import { consultarUsuarios } from "../../../Api/Rule_user";
import Accordion from 'react-bootstrap/Accordion';



import "./ListUsers.css";

function ListUsers() {
  const [usuarios, setUsuarios] = useState([]);

  const listarUsuarios = async () => {
    await consultarUsuarios()
      .then((response) => {
        setUsuarios(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    listarUsuarios();
  }, []);

  return (
   
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
            {usuarios &&
              usuarios.map((usuario) => {
                return (
                  <div className="dataUsers" key={usuario.id}>
                    <p className="txtUsers">{`Nombre: ${usuario.nombre}  Email: ${usuario.email}`}</p>
                  </div>
                );
              })}
              </Accordion.Body>
            </Accordion.Item>
                    </Accordion>
  );
}

export default ListUsers;
