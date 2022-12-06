import React from "react";
import { Link } from "react-router-dom";

import NameUser from "../../Components/ComponentsUser/NameUser/NameUser";
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

import "./homeAdmin.css";

function HomeAdmin() {
  return (
    <>
      <HeaderAdmin />
      <Flex flexDirection="column" justifyContent="center" mx="27rem" my="20">
        <Box className="titleAdmin">
          <Text fontSize="2rem">
            Bienvenido, {""}
            <span className="spanRed">
              <NameUser />
            </span>
          </Text>
          <Text fontSize="3rem" as="b">
            Tablero administrativo
          </Text>
          <Text fontSize="1.6rem" w="50%">
            Aquí podrás crear, modificar y eliminar tus publicaciones. También
            podrás crear nuevos usuarios.
          </Text>
        </Box>

        <Flex mt="10" gap="20">
          <Card textAlign="center" w="xl" bg='var(--gray)' borderRadius='2rem'>
            <CardBody>
              <Image src="assets/casa.png" alt="Icono de casa" w="10rem" />

              <Text fontSize="2rem" my="10">
                Gestión de publicaciones
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                fontSize="1.6rem"
                p="8"
                borderRadius="2rem"
                bg="var(--red)"
                color='var(--white)'
              >
                <Link to={"/gestionPublicaciones"}>
                  Ir a gestionar Publicaciones
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card textAlign="center" w="xl" bg='var(--gray)' borderRadius='2rem'>
            <CardBody>
              <Image src="assets/perfil(1).png" alt="Icono de casa" w="10rem" />

              <Text fontSize="2rem" my="10">
                Gestión de usuarios
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                fontSize="1.6rem"
                p="8"
                borderRadius="2rem"
                bg="var(--red)"
                color='var(--white)'
              >
                <Link to={"/gestionPublicaciones"}>
                  Ir a gestionar usuarios
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </Flex>
      </Flex>
    </>
  );
}

export default HomeAdmin;
