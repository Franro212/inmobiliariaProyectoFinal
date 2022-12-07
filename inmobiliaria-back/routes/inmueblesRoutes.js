const express = require('express');
const router = express.Router();
const {
    listaInmueble,
    inmuebleNuevo,
    modificarInmueble,
    eliminarInmueble,
    filtrarInmueble,
    photo,
    buscarById,
    
  } = require("../controllers/inmuebleController");
 
  router.post("/inmueble/listainmueble/filtrar", filtrarInmueble);
   router.get("/inmuebles/listaInmueble", listaInmueble);

   router.get("/inmuebles/photo/:id", photo);

   router.get("/inmuebles/buscar/:id", buscarById);
  
  router.post("/inmuebles/nuevo",  inmuebleNuevo);
  
  router.put("/inmuebles/modificar/:id", modificarInmueble)
  
  router.delete("/inmuebles/eliminar/:id", eliminarInmueble)
 

  
  
  module.exports = router;
