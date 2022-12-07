import React from "react";
import HeaderAdmin from "../../Components/Header/HeaderAdmin/HeaderAdmin";
import ListadoInmuebles from "../../Components/ComponentsInmu/ListadoInmueble";
import EliminarInmueble from "../../Components/ComponentsInmu/EliminarInmueble";


import { Text, Flex, Box } from "@chakra-ui/react";

function GestionPublicaciones() {
  return (
    <>
      <HeaderAdmin />

      <Flex justifyContent="space-between" mx="27rem" my="20">
        <Box>
          <Text fontSize="2rem">Tablero Administrativo</Text>
          <Text fontSize="3rem" as="b">
            Publicaciones
          </Text>
        </Box>
        {/* <RegisterUser /> */}
      </Flex>

      <Flex flexDirection="column" mx="27rem" my="20">
        <EliminarInmueble/>
        <ListadoInmuebles />
      </Flex>
    </>
  );
}

export default GestionPublicaciones;
