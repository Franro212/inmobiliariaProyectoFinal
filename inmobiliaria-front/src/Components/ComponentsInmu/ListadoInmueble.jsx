import React, { useEffect, useState } from "react";
import { listaInmuebles } from "../../Api/Rule_auth_inmobiliaria";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
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

      <TableContainer mt='20'>
        <Table variant="simple" size="lg">
          <Thead >
            <Tr>
              <Th fontSize='2xl'>Id del inmueble</Th>
              <Th fontSize='2xl'>Imagen</Th>
              <Th fontSize='2xl'>Tipo Operación</Th>
              <Th fontSize='2xl'>Cant. baños</Th>
              <Th fontSize='2xl'>Cant. dormitorios</Th>
              <Th fontSize='2xl'>M2 del Terreno</Th>
              <Th fontSize='2xl'>M2 de Edificado</Th>
              <Th fontSize='2xl'>Departamento</Th>
              <Th fontSize='2xl'>Ciudad</Th>
              <Th fontSize='2xl'>Barrio</Th>
              <Th fontSize='2xl'>Dirección</Th>
              <Th fontSize='2xl'>Garantía</Th>
              <Th fontSize='2xl'>Precio</Th>
              <Th fontSize='2xl'>Descripción</Th>
            </Tr>
          </Thead>
          <Tbody>
            {inmuebles &&
              inmuebles.map((inmueble) => {
                return (
                  <Tr key={inmueble.id}>
                    <Td p="5">{inmueble.id_inmueble}</Td>
                    <Td p="5">{inmueble.file_data}</Td>
                    <Td>{inmueble.tipo_operacion}</Td>
                    <Td>{inmueble.tipo_inmueble}</Td>
                    <Td>{inmueble.banio}</Td>
                    <Td>{inmueble.dormitorio}</Td>
                    <Td>{inmueble.m2_terreno}</Td>
                    <Td>{inmueble.m2_edificado}</Td>
                    <Td>{inmueble.departamento}</Td>
                    <Td>{inmueble.ciudad}</Td>
                    <Td>{inmueble.barrio}</Td>
                    <Td>{inmueble.direccion}</Td>
                    <Td>{inmueble.garantia}</Td>
                    <Td>{inmueble.precio}</Td>
                    <Td>{inmueble.descripcion}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>

    </>
  );
}

export default ListadoInmuebles;