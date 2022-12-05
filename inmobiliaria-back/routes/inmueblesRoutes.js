const express = require('express');
const router = express.Router();
const {
    listaInmueble,
    inmuebleNuevo,
    modificarInmueble,
    eliminarInmueble,
    
  } = require("../controllers/inmuebleController");
  const { verifyToken} = require("../validators/auth");
  
 
   router.get("/inmuebles/listaInmueble",verifyToken, listaInmueble);
  
  router.post("/inmuebles/nuevo",verifyToken,  inmuebleNuevo);
  
  router.put("/inmuebles/modificar/:id",verifyToken, modificarInmueble)
  
  router.delete("/inmuebles/eliminar/:id",verifyToken,  eliminarInmueble)
 

  
  
  module.exports = router;
