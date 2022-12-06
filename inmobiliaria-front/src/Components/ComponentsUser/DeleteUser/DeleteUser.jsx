import React from 'react'

function DeleteUser() {
    const [id, setId] = useState("");

    const handleIdInmueble = (e) => {
      setId(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
   
  
      await eliminarInmueble(id)
        .then(() => {
          alert("Inmueble eliminado");
        })
        .catch((error) => {
          alert(error);
        });
    };
  
    return (
      <>
        
                  <button className="btn" type="submit">
                    Eliminar Usuario
                  </button>
      </>
  )
}

export default DeleteUser;