import React, { useEffect, useState } from "react";
import { listaInmuebles } from "../../Api/Rule_auth_inmobiliaria";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function ListadoInmuebles() {
  const [inmuebles, setInmuebles] = useState([]);

  const consultarInmuebles = async () => {
    await listaInmuebles()
      .then((response) => {
        setInmuebles(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    consultarInmuebles();
  }, []);


  return (
    <>
      <Accordion allowToggle className="acordion" h="5xl">
        <AccordionItem className="a-item">
          <h3>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Inmuebles en el sistema
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel>
            {inmuebles &&
              inmuebles.map((inmueble) => {
                return (
                  <div key={inmueble.id_inmuebles}>
                    <p>{inmueble.nombre}</p>
                  </div>
                );
              })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default ListadoInmuebles;