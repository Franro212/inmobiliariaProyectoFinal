
import React from "react";
import { useForm } from "react-hook-form";
import { agregarInmueble } from "../../Api/Rule_auth_inmobiliaria";
function RegistroInmueble() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("m2_edificado", data.m2_edificado);
    formData.append("m2_terreno", data.m2_terreno);
    formData.append("precio", data.precio);
    formData.append("ciudad", data.ciudad);
    formData.append("departamento", data.departamento);
    formData.append("tipo_operacion", data.tipo_operacion);
    formData.append("tipo_inmueble", data.tipo_inmueble);
    formData.append("dromitorio", data.dormitorio);
    formData.append("banio", data.banio);
    formData.append("direccion", data.direccion);
    formData.append("descripcion", data.descripcion);
    formData.append("garantia", data.garantia);
    formData.append("barrio", data.barrio);

    const config = {
      headers:{
        "content-type": "multipart/form-data"
      },
    }

    await agregarInmueble(formData, config)
      .then(() => {
        alert("Su registro de realizado con exito")
        
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
   <>
   <form onSubmit={handleSubmit(onSubmit)} className="">
   <label htmlFor="imagen">
      <p>Imagen*</p>
      <input
        className="input"
        type="file"
        {...register("file",
        { required: false,
        validate: (value) => value[0].size<=10000000, //1MB
      }
      )}
        />
      <br />
      {errors.file?.type === "required" && <span>La imagen es requerida</span>}
      {errors.file?.type === "validate" && <span>Tamanio maximo de 1MB</span>}
        </label>
   <select className="input" name="Tipo de operacion">
          <option>Seleccione tipo de operacion</option>
          <option
            {...register("tipo_operacion", {required: true,})}
            value="venta"
          >
            Venta
          </option>
          <option
            value="alquiler"
            {...register("tipo_operacion", {required: true,})}
          >
            Alquiler
          </option>
        </select>

        <select className="input" name="Tipo de inmueble">
          <option>Seleccione tipo de inmueble</option>
          <option
            {...register("tipo_inmueble", {required: true,})}
            value="Apartamento"
          >
            Apartamento
          </option>
          <option
            value="Casa"
            {...register("tipo_inmueble", {required: true,})}
          >
            Casa
          </option>
          <option
            value="Terreno"
            {...register("tipo_inmueble", {required: true,})}
          >
            Terreno
          </option>
        </select>

      <label htmlFor="ciudad">baño/s</label>
      <input
        className="input"
        type="number"
        {...register("banio")}
      />
      <label htmlFor="precio">Dormitorio</label>
      <input
        className="input"
        type="number"
        {...register("dormitorio")}
      />
      
    
      <label htmlFor="superfeicie">Superficie del terreno</label>
      <input
        className="input"
        type="number"
        {...register("m2_terreno", { required: true})}
      />
      <br />
      {errors.m2_terreno?.type === "required" && <span>La superficia es requerida</span>}

      <label htmlFor="superfeicie">Superficie edificada</label>
      <input
        className="input"
        type="number"
        {...register("m2_edificado")}
      />
      <label htmlFor="departamento">Departamento</label>
      <input
        className="input"
        type="text"
        {...register("departamento", { required: true})}
      />
      <br />
      {errors.departamento?.type === "required" && <span>El departamento es requerido</span>}
      <label htmlFor="ciudad">Ciudad</label>
      <input
        className="input"
        type="text"
        {...register("ciudad", { required: true})}
      />
      <br />
      {errors.ciudad?.type === "required" && <span>La ciudad es requerida</span>}
      <label htmlFor="barrio">Barrio</label>
      <input
        className="input"
        type="text"
        {...register("barrio")}
      />
      <label htmlFor="direccion">Direccion</label>
      <input
        className="input"
        type="text"
        {...register("direccion", { required: true})}
      />
      <br />
      {errors.direccion?.type === "required" && <span>La direccion es requerida</span>}
      <label htmlFor="garantia">Garantia</label>
      <input
        className="input"
        type="text"
        {...register("garantia")}
      />
     
      <label htmlFor="precio">Precio</label>
      <input
        className="input"
        type="number"
        {...register("precio", { required: true})}
      />
      <br />
      {errors.precio?.type === "required" && <span>El precio es requerida</span>}
      <label htmlFor="descripcion">Descripcio</label>
      <textarea
        className="input"
        {...register("descripcion")}
      />  
      <input type="submit" value="Registrar" className="btnRegister"  />
    </form>  
   </>
  );
}

export default RegistroInmueble;