import React from 'react'
import HeaderAdmin from '../../Components/Header/HeaderAdmin/HeaderAdmin';
import ListadoInmuebles from '../../Components/ComponentsInmu/ListadoInmueble';
import { Flex } from '@chakra-ui/react';

function GestionPublicaciones() {
  return (
    <>
      <HeaderAdmin/>
    <Flex>
      <ListadoInmuebles/>


    </Flex>
    </>
  )
}

export default GestionPublicaciones;