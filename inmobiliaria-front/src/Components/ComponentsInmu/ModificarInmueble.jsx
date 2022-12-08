import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { modificar } from "../../Api/Rule_auth_inmobiliaria";
import HeaderAdmin from "../../Components/Header/HeaderAdmin/HeaderAdmin";
import "./compInmu.css";

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";

function ModificarInmueble() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await modificar(data)
      .then(() => {
        alert("Su modificacion fue realizada con exito");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <HeaderAdmin />
      <Flex mx="27rem" mt="10">
        <Breadcrumb fontSize="2xl">
          <BreadcrumbItem>
            <Link to="/homeAdmin">Inicio</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/gestionPublicaciones">Gestión de publicaciones</Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage color="var(--red)">
            <Link to="/modificarInmueble">Modificar Publicaciones</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <Flex mx="27rem" mt="20" justifyContent="space-between">
        <form onSubmit={handleSubmit(onSubmit)} className="formRegistrarInmu">
          <Heading mb="32">Modificar publicación</Heading>

          <Input
        className="input"
        type="number"
        {...register("id", {
          required: true})}
      />
      <br />
      {errors.id?.type === "required" && <span>El ID es requerido</span>}


          <Select
            name="Tipo de operacion"
           
            placeholder="Tipo de operación"
            fontSize="2xl"
            bg="var(--gray)"
            border="none"
            h="20"
            size="lg"
            rounded="20"
            my="10"
          >
            <option
              {...register("tipo_operacion")}
              value="venta"
            >
              Venta
            </option>
            <option
              value="alquiler"
              {...register("tipo_operacion")}
            >
              Alquiler
            </option>
          </Select>

          <Select
            name="Tipo de inmueble"
           
            placeholder="Tipo de inmueble"
            fontSize="2xl"
            bg="var(--gray)"
            border="none"
            h="20"
            size="lg"
            rounded="20"
            my="10"
          >
            <option
              {...register("tipo_inmueble")}
              value="Apartamento"
            >
              Apartamento
            </option>
            <option
              value="Casa"
              {...register("tipo_inmueble")}
            >
              Casa
            </option>
            <option
              value="Terreno"
              {...register("tipo_inmueble")}
            >
              Terreno
            </option>
          </Select>

          <Divider my="10"></Divider>

          <Flex gap="10">
            <Input
              fontSize="2xl"
              placeholder="Cant.Baños"
              autoComplete
            
              bg="var(--gray)"
              border="none"
              _focus={{
                border: "1px solid var(--red)",
              }}
              py="10"
              size="lg"
              rounded="20"
              mt="10"
              _placeholder={{ opacity: 8, color: "var(--black)" }}
              type="number"
              {...register("banio")}
            />

            <Input
              fontSize="2xl"
              placeholder="Cant. Dormitorios"
              autoComplete
           
              bg="var(--gray)"
              border="none"
              _focus={{
                border: "1px solid var(--red)",
              }}
              py="10"
              size="lg"
              rounded="20"
              _placeholder={{ opacity: 8, color: "var(--black)" }}
              my="10"
              type="number"
              {...register("dormitorio")}
            />
          </Flex>
          <Divider my="10"></Divider>

          <Flex gap="5">
  
            <Input
              fontSize="2xl"
              autoComplete
              placeholder="Superficie del terreno"
             
              bg="var(--gray)"
              border="none"
              _focus={{
                border: "1px solid var(--red)",
              }}
              py="10"
              size="lg"
              rounded="20"
              my="10"
              _placeholder={{ opacity: 8, color: "var(--black)" }}
              type="number"
              {...register("m2_terreno")}
            />
          
          
            <Input
              fontSize="2xl"
              placeholder=" Superficie edificada"
              autoComplete
             
              bg="var(--gray)"
              border="none"
              _focus={{
                border: "1px solid var(--red)",
              }}
              py="10"
              size="lg"
              rounded="20"
              my="10"
              _placeholder={{ opacity: 8, color: "var(--black)" }}
              type="number"
              {...register("m2_edificado")}
            />
          </Flex>

          <Divider my="10"></Divider>

          <Flex gap="10">
            <Flex direction="column" w="50%">
             
              <Input
                fontSize="2xl"
                autoComplete
                placeholder="Departamento"
             
                bg="var(--gray)"
                border="none"
                _focus={{
                  border: "1px solid var(--red)",
                }}
                py="10"
                size="lg"
                rounded="20"
                my="10"
                _placeholder={{ opacity: 8, color: "var(--black)" }}
                type="text"
                {...register("departamento")}
              />
             
              <Input
                fontSize="2xl"
                autoComplete
                placeholder="Ciudad"
                
                bg="var(--gray)"
                border="none"
                _focus={{
                  border: "1px solid var(--red)",
                }}
                py="10"
                size="lg"
                rounded="20"
                my="10"
                _placeholder={{ opacity: 8, color: "var(--black)" }}
                type="text"
                {...register("ciudad")}
              />
            
            </Flex>

            <Flex direction="column" w="50%">
           
              <Input
                fontSize="2xl"
                placeholder="Barrio"
                autoComplete
              
                bg="var(--gray)"
                border="none"
                _focus={{
                  border: "1px solid var(--red)",
                }}
                py="10"
                size="lg"
                rounded="20"
                my="10"
                _placeholder={{ opacity: 8, color: "var(--black)" }}
                type="text"
                {...register("barrio")}
              />

           

              <Input
                fontSize="2xl"
                autoComplete
                placeholder="Dirección"
                
                bg="var(--gray)"
                border="none"
                _focus={{
                  border: "1px solid var(--red)",
                }}
                py="10"
                size="lg"
                rounded="20"
                my="10"
                _placeholder={{ opacity: 8, color: "var(--black)" }}
                type="text"
                {...register("direccion")}
              />
             
            </Flex>
          </Flex>

          <Divider my="10"></Divider>
          <Flex gap="10">
           

            <Flex flexDirection="column" w="50%">
              <Input
                fontSize="2xl"
                placeholder="Garantía"
                autoComplete
               
                bg="var(--gray)"
                border="none"
                _focus={{
                  border: "1px solid var(--red)",
                }}
                py="10"
                size="lg"
                rounded="20"
                my="10"
                _placeholder={{ opacity: 8, color: "var(--black)" }}
                type="text"
                {...register("garantia")}
              />

            
              <Input
                fontSize="2xl"
                autoComplete
                placeholder="Precio"
                bg="var(--gray)"
                border="none"
                _focus={{
                  border: "1px solid var(--red)",
                }}
                py="10"
                size="lg"
                rounded="20"
                my="10"
                _placeholder={{ opacity: 8, color: "var(--black)" }}
                type="number"
                {...register("precio")}
              />
             
            </Flex>

            <Textarea
              placeholder="Descripción"
              minH="60"
              fontSize="2xl"
              bg="var(--gray)"
              border="none"
              rounded="20"
              my="10"
              py="10"
              _placeholder={{ opacity: 8, color: "var(--black)" }}
              {...register("descripcion")}
            />
          </Flex>
          <Divider my="10"></Divider>

          <Flex justifyContent="flex-end" my="10">
            <Button
              mt="10"
              fontSize="2xl"
              bg="var(--red)"
              color="var(--white)"
              p="10"
              rounded="20"
              type="submit"
              _hover={{
                background: "var(--red-second)",
              }}
            >
              Modificar publicación
            </Button>
          </Flex>
        </form>
      </Flex>
    </>
  );
}

export default ModificarInmueble;
