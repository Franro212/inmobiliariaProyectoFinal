<<<<<<< HEAD
import API from "./Rule_Api";

export const listaInmuebles = async() =>{
    let url="api/inmueble/listainmueble";
    return await API.get(url)
    .then((response)=>{
=======
import API from "./Rule_Api"

export const listaInmuebles = async ()=>{
    let url = "/api/inmuebles/listaInmueble";
    return await API.get(url)
    .then((response)=>{
        localStorage.setItem("token", response.data.token);
>>>>>>> 75185e8752f67400dbe2f0ca478868838b17ce67
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
<<<<<<< HEAD
        throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const filtrarInmuebles = async(body) =>{
    let url="api/inmueble/listainmueble/filtrar";
    return await API.post(url,body)
    .then((response)=>{
=======
        throw error.response.data.error || "Error procesando la solicitud"
    })

}
export const buscarId = async ()=>{
    let url = "/api/inmuebles/buscar/:id";
    return await API.get(url)
    .then((response)=>{
        localStorage.setItem("token", response.data.token);
>>>>>>> 75185e8752f67400dbe2f0ca478868838b17ce67
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
<<<<<<< HEAD
        throw error.response.data.error || "Error procesando la solicitud";
    });
};
=======
        throw error.response.data.error || "Error procesando la solicitud"
    })

}
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
>>>>>>> 75185e8752f67400dbe2f0ca478868838b17ce67
