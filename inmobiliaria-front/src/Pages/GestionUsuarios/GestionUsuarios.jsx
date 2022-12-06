import React from "react";
import HeaderAdmin from "../../Components/Header/HeaderAdmin/HeaderAdmin";

import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Flex,
  Box,
  CardHeader,
  Image,
} from "@chakra-ui/react";

function GestionUsuarios() {
  return (
    <>
      <HeaderAdmin />

      <Flex flexDirection="column" justifyContent="center" mx="27rem" my="20">
        <Box>
          <Text fontSize="2rem">Tablero Administrativo</Text>
          <Text fontSize="3rem" as="b">
            Usuarios
          </Text>
        </Box>

        <Button bg="var(--red)" variant="solid" borderRadius='3rem' px='5' py='10' w='10%' fontSize='1.6rem'>
          Crear usuario
        </Button>
      </Flex>
    </>
  );
}

export default GestionUsuarios;
