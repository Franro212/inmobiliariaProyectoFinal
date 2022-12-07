import React, { useEffect } from 'react';
import {useState} from 'react';
import Header from '../Header/Header';
import BuscadorBar from '../BuscadorBar/BuscadorBar';
import DisplayCardsInmuebles from '../DisplayCardsInmuebles/DisplayCardsInmuebles';

import {listaInmueblesBuscar, filtrarInmuebles} from '../../Api/Rule_auth_inmobiliaria';


// import '../../App.css';
import './buscadorpage.css';

function BuscadorPage() {
    const[inmuebles, setInmuebles] = useState([]);
    const[datosIniciales,setDatosIniciales] = useState([]);
    const [ObjetoSelect, setObjetoSelect] = useState({
      departamento:'',
      tipo_inmueble:'',
      precio:0,
  });
   

    useEffect(()=>{
      listaInmueblesBuscar()
    .then((response)=> {
        setInmuebles(response);
        setDatosIniciales(response);
    })
    .catch((error)=>{
        alert(error);
    });
    },[]);

    console.log("inmuebles: ", inmuebles);

    const onClickFiltrar = async (datos) =>{
       await filtrarInmuebles(datos)
      .then((response)=> {
          setInmuebles(response)
          // console.log("response desde onclickFiltrar", response);
      })
      .catch((error)=>{
          alert(error);
      });
      
  };
  // const inmuebleBuscar = () => { 
  //   const inmueblesFiltered = datosIniciales.filter((innerArray)=>{
  //       if(innerArray.departamento.includes(ObjetoSelect.Departamento.value)){
  //         return true;
  //       }
  //       else if (innerArray.departamento.includes(ObjetoSelect.Departamento.value) && innerArray.tipo_inmueble.includes(ObjetoSelect.Tipo.value)){
  //         return true;

  //       }
  //       else {
  //         return false;
  //       }
  
  //   });
//     if (inmueblesFiltered?.length) {
//       setInmuebles(inmueblesFiltered);
//     } else {
//       setInmuebles(datosIniciales);
//     }
    
//      console.log("Inmuebles Filtered: ",  inmueblesFiltered);

// }

  return (
    <>
    <div>
      <Header/>
    </div>
    <div className='buscadorbarContainer'>
      <BuscadorBar  
        setInmuebles={setInmuebles}
        ObjetoSelect={ObjetoSelect}
        setObjetoSelect={setObjetoSelect} 
        Inmuebles={inmuebles} 
        InmuebleBuscar={listaInmueblesBuscar}
        onClickFiltrar={onClickFiltrar}
        />  
    </div>
    <div>
      <DisplayCardsInmuebles  Inmuebles={inmuebles}
      />
    </div>

    </>
  )
}

export default BuscadorPage;