import React, { useState, useEffect } from "react";
import { consultarUsuarios } from "../../../Api/Rule_user";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box, 
  ChakraProvider
} from "@chakra-ui/react";

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
      <Accordion allowToggle pr="12">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Lista de usuarios
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {usuarios &&
              usuarios.map((usuario) => {
                return (
                  <div className="dataUsers" key={usuario.id}>
                    <p className="txtUsers">{`Nombre: ${usuario.nombre}  Email: ${usuario.email}`}</p>
                  </div>
                );
              })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
   
  );
}

export default ListUsers;
