import API from "./Rule_Api";

export const listaInmueblesBuscar = async() =>{
    let url="/api/inmuebles/listainmueblebuscar";
    return await API.get(url)
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        throw error.response.data.error || "Error procesando la solicitud";
    });
}

export const filtrarInmuebles = async(body) =>{
    let url="/api/inmuebles/listainmueblebuscar/filtrar";
    return await API.post(url,body)
    .then((response)=>{
        return response.data
    })
        .catch((error)=>{
            throw error.response.data.error || "Error procesando la solicitud";
        });
}

export const listaInmuebles = async ()=>{
    let url = "/api/inmuebles/listaInmueble";
    return await API.get(url)
    .then((response)=>{
        localStorage.setItem("token", response.data.token);
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud";
    });
};



export const buscarById = async (id_inmueble)=>{
    let url = `/api/inmuebles/buscar/${id_inmueble}`;
    return await API.get(url)
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })

}

export const infoInmueble = async () => {
    const url = "/api/inmuebles/infoInmueble";
    return await API.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud";
      });
  };

export const agregarInmueble = async (formData, config)=>{
    let url = "/api/inmuebles/nuevi";
    return await API.post(url, formData, config)
    .then((response)=>{
        localStorage.setItem("token", response.data.token);
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })

}
export const modificar = async ()=>{
    let url = "/api/inmuebles/modificar/:id";
    return await API.put(url)
    .then((response)=>{
        localStorage.setItem("token", response.data.token);
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })

}
export const eliminar = async ()=>{
    let url = "/api/inmuebles/eliminar/:id";
    return await API.delete(url)
    .then((response)=>{
        localStorage.setItem("token", response.data.token);
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })

}
