const knex = require("../config/inmobiliariaRossi_DB")
const formidable = require("formidable")
const fs = require("fs")





exports.filtrarInmueble = (req, res) => {
  const { departamento, tipo_inmueble, precio } = req.body;
  console.log("¿Qué departamento ingresa?", departamento);
  console.log("¿Qué tipo_inmueble ingresa?", tipo_inmueble);
  console.log("¿Que precio ingresa?", precio);

  // console.log('¿newPrice funciona?',newPrice)

  knex
    .select("*")
    .from("inmuebles")
    .join("ubicaciones", { id_ubicacion: "inmuebles.id_inmueble" })
    .then((respuesta) => {
      let filteredInmuebleOr = respuesta.filter((innerArray) => {
        if (
          innerArray.departamento.includes(departamento.value) ||
          innerArray.tipo_inmueble.includes(tipo_inmueble.value) ||
          parseInt(innerArray.precio) <= parseInt(precio)
        ) {
          // || (innerArray.precio.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."))>=newPrice
          return true;
        } else {
          return false;
        }
      });

      let filteredInmuebleAnd = respuesta.filter((innerArray) => {
        if (
          (innerArray.departamento.includes(departamento.value) &&
            innerArray.tipo_inmueble.includes(tipo_inmueble.value) &&
            parseInt(innerArray.precio) <= parseInt(precio)) ||
          (innerArray.departamento.includes(departamento.value) &&
          parseInt(innerArray.precio) <= parseInt(precio))
        ) {
          return true;
        } else {
          return false;
        }
      });

      if (filteredInmuebleOr.length > 0 && filteredInmuebleAnd.length == 0) {
        res.send(filteredInmuebleOr);
      } else if (filteredInmuebleAnd.length > 0) {
        res.send(filteredInmuebleAnd);
      } else {
        res.json(respuesta);
      }
      // console.log('FilteredInmuebleAnd:', filteredInmuebleAnd)
      // console.log('FilteredInmuebleOr:', filteredInmuebleOr)
      //
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.listaInmueble = (req, res) => {
    knex.select('*')
    .from('inmuebles')
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
  exports.inmuebleNuevo = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          error: "La imagen no pudo ser cargada",
        });
      }
      const { 
        tipo_operacion,
        tipo_inmueble,
        dormitorio,
        banio,    
        m2_terreno,
        m2_edificado,
        ciudad,
        descripcion,
        precio, 
        garantia,
        departamento,
        barrio,
        direccion,
       } = fields;
       if(!tipo_operacion || !tipo_operacion.length){
        return res.status(400)
        .json({error:"Este campo es obligatorio, tipo_operacion"})
      }
      if(!tipo_inmueble || !tipo_inmueble.length){
        return res.status(400)
        .json({error:"Este campo es obligatorio, tipo_inmueble"})
      }
      if(!m2_terreno || !m2_terreno.length){
        return res.status(400)
        .json({error:"Este campo es obligatorio, metros_cuadrados"})
      }
      if(!precio || !precio.length){
        return res.status(400)
        .json({error:"Este campo es obligatorio, precio"})
      }
      if(!direccion || !direccion.length){
        return res.status(400)
        .json({error:"Este campo es obligatorio, direccion"})
      }
      if(!ciudad || !ciudad.length){
        return res.status(400)
        .json({error:"Este campo es obligatorio, ciudad"})
      }
      if(!departamento || !departamento.length){
        return res.status(400)
        .json({error:"Este campo es obligatorio, departamento"})
      }
      if(!barrio || !barrio.length){
        return res.status(400)
        .json({error:"Este campo es obligatorio, barrio"})
      }
  
      
      
          let file_data;
          let file_type;
          if (files.file) {
            if (files.file.size > 1000000) {
              return res.status(400).json({
                error: "Tamaño máximo de la imagen: 1MB",
              });
            }
  
            file_data = fs.readFileSync(files.file.filepath);
            file_type = files.file.mimetype;
          }
  
            knex("inmuebles")
              .insert({
                tipo_operacion:tipo_operacion,
                tipo_inmueble:tipo_inmueble,
                dormitorio:dormitorio,
                banio:banio,
                m2_terreno:m2_terreno,
                m2_edificado:m2_edificado,
                descripcion:descripcion,
                precio:precio,
                garantia:garantia,
                departamento: departamento,
                barrio:barrio,
                direccion:direccion,
                ciudad:ciudad,
                file_data:file_data,
                file_type:file_type,
              })
              .then(() => {
                res.json({
                  success: true,
                  mensaje: "El inmueble fue ingresado correctamente",
                });
              })
              .catch((error) => {
                res.status(400).json({ error: error.message });
              });
            })}
        
        
      
  exports.modificarInmueble  = async (req, res) => {
    const id = req.params.id;
    const {
      tipo_operacion,
      tipo_inmueble,
      dormitorio,
      banio,    
      m2_terreno,
      m2_edificado,
      ciudad,
      descripcion,
      precio, 
      garantia,
      departamento,
      barrio,
      direccion,
    } = req.body;
   
    
    
    knex("inmuebles")
        .where("inmuebles.id_inmueble", id)
        .update({
            tipo_operacion:tipo_operacion,
            tipo_inmueble:tipo_inmueble,
            dormitorio:dormitorio,
            banio:banio,
            m2_terreno:m2_terreno,
            m2_edificado:m2_edificado,
            descripcion:descripcion,
            precio:precio,
            garantia:garantia,
            ciudad:ciudad,
            direccion: direccion, 
            departamento: departamento,
            barrio:barrio,
           
        })
    
        
        .then(() => {
          res.json({
            success: true,
            mensaje: "El inmueble fue modificado correctamente",
          });
        })
  
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
}
exports.eliminarInmueble = (req, res) => {
  const id = req.params.id;
  knex("inmuebles")
    .where("id_inmueble", id)
    .del()

    .then(() => {
      res.json({ mensaje: "El inmueble ha sido eliminado correctamente" });
    })
    .catch((error) => {
      res.status(404).json({ error: error });
    });
};

exports.photo = (req, res) => {
    const id = req.params.id;
    knex("inmuebles")
      .where("id_inmueble", id)
      .then((result) => {
        res.set("Content-Type", result[0].file_type);
        return res.send(result[0].file_data);
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  };
 
  exports.buscarById = (req, res) => {
    const id = req.params.id;
    knex("inmuebles")
      .where("inmuebles.id_inmueble", id)
      .then((resultado) => {
        if (resultado.length) {
          res.json(resultado);
        } else {
          res.status(404).json({ error: "No existe el Id en la base de datos" });
        }
      });
  };


  

  /****FILTRAR INMUEBLE**** */
exports.filtrarInmueble = (req, res) => {
  const { departamento, tipo_inmueble, precio } = req.body;
  console.log("¿Qué departamento ingresa?", departamento);
  console.log("¿Qué tipo_inmueble ingresa?", tipo_inmueble);
  console.log("¿Que precio ingresa?", precio);

  // console.log('¿newPrice funciona?',newPrice)

  knex
    .select("*")
    .from("inmuebles")
    .join("ubicaciones", { id_ubicacion: "inmuebles.id_inmueble" })
    .then((respuesta) => {
      let filteredInmuebleOr = respuesta.filter((innerArray) => {
        if (
          innerArray.departamento.includes(departamento.value) ||
          innerArray.tipo_inmueble.includes(tipo_inmueble.value) ||
          parseInt(innerArray.precio) <= parseInt(precio)
        ) {
          // || (innerArray.precio.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."))>=newPrice
          return true;
        } else {
          return false;
        }
      });

      let filteredInmuebleAnd = respuesta.filter((innerArray) => {
        if (
          (innerArray.departamento.includes(departamento.value) &&
            innerArray.tipo_inmueble.includes(tipo_inmueble.value) &&
            parseInt(innerArray.precio) <= parseInt(precio)) ||
          (innerArray.departamento.includes(departamento.value) &&
          parseInt(innerArray.precio) <= parseInt(precio))
        ) {
          return true;
        } else {
          return false;
        }
      });

      if (filteredInmuebleOr.length > 0 && filteredInmuebleAnd.length == 0) {
        res.send(filteredInmuebleOr);
      } else if (filteredInmuebleAnd.length > 0) {
        res.send(filteredInmuebleAnd);
      } else {
        res.json(respuesta);
      }
      // console.log('FilteredInmuebleAnd:', filteredInmuebleAnd)
      // console.log('FilteredInmuebleOr:', filteredInmuebleOr)
      //
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};