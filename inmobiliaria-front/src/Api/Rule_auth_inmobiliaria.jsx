import API from "./Rule_Api";

export const listaInmuebles = async() =>{
    let url="api/inmueble/listainmueble";
    return await API.get(url)
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const filtrarInmuebles = async(datos) =>{
    let url="api/inmueble/listainmueble/filtrar";
    return await API.get(url,{data:datos})
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud";
    });
};