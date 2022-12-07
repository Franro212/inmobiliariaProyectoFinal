import React from 'react'
import HeaderAdmin from '../../Components/Header/HeaderAdmin/HeaderAdmin';
import ListadoInmuebles from '../../Components/ComponentsInmu/ListadoInmueble';
import { Flex } from '@chakra-ui/react';
import RegistroInmueble from '../../Components/ComponentsInmu/RegistrarInmueble';

function GestionPublicaciones() {
  return (
    <>
      <HeaderAdmin/>
    <Flex>
      <ListadoInmuebles/>


    </Flex>
      <RegistroInmueble/>
    </>
  )
}

export default GestionPublicaciones;