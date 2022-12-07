import React, { useState } from "react";
import { eliminarInmueble } from "../../api/Rule_inmueble";


import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function EliminarInmueble() {
  const [id, setId] = useState("");

  const handleIdInmueble = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 

    await eliminarInmueble(id)
      .then(() => {
        alert("Inmueble eliminado");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Accordion allowToggle className="acordion" h="5xl">
        <AccordionItem className="a-item">
          <h3>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Eliminar inmueble
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel>
            <form className="form f-e" onSubmit={handleSubmit}>
              <label>
                <input
                  className="input-form form-eliminar"
                  placeholder="ID"
                  required
                  autoComplete="none"
                  type="number"
                  value={id}
                  onChange={handleIdInmueble}
                />
              </label>

              <div className="container-btn">
                <button className="btn" type="submit">
                  Eliminar inmueble
                </button>
              </div>
            </form>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default EliminarInmueble;