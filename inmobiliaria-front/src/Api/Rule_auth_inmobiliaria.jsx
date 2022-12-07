import API from "./Rule_Api"

export const listaInmuebles = async ()=>{
    const url = "/api/inmuebles/listaInmueble";
    return await API.get(url)
    .then((response)=>{
        // localStorage.setItem("token", response.data.token);
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })
}


export const buscarId = async ()=>{
    const url = "/api/inmuebles/buscar/:id";
    return await API.get(url)
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })

}
export const agregarInmueble = async (formData, config)=>{
    const url = "/api/inmuebles/nuevi";
    return await API.post(url, formData, config)
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })

}
export const modificar = async ()=>{
    const url = "/api/inmuebles/modificar/:id";
    return await API.put(url)
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })

}
export const eliminar = async (id_inmueble)=>{
    const url = `/api/inmuebles/eliminar/${id_inmueble}`;
    return await API.delete(url)
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })

}

export const filtrarInmuebles = async(body) =>{
    let url="api/inmueble/listainmueble/filtrar";
    return await API.post(url,body)
    .then((response)=>{

        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })
}
