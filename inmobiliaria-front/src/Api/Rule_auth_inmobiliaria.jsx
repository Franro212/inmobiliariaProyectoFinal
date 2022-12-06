import API from "./Rule_Api"

export const listaInmuebles = async ()=>{
    let url = "/api/inmuebles/listaInmueble";
    return await API.get(url)
    .then((response)=>{
        localStorage.setItem("token", response.data.token);
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
        throw error.response.data.error || "Error procesando la solicitud"
    })

}