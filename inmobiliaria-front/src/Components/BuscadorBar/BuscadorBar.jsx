import React, {useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import {Form} from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import Select,  { components } from 'react-select';
import './buscadorbar.css';

const optionsDepartamentos = [
    { value:0,label:'Departamento...'},
    { value: 'Montevideo', label: 'Montevideo' },
    { value: 'Canelones', label: 'Canelones' },
    { value: 'Maldonado', label: 'Maldonado' }
  ]
const optionsTipoInmuebles = [
     { value:0,label:'Tipo Inmueble...'},

    { value: 'Apartamento', label: 'Apartamento' },
    { value: 'Casa', label: 'Casa' },
    { value: 'Terreno', label: 'Terreno' }
  ] 
  const number = 123.789;
 




function BuscadorBar(props) {
    // const [ObjetoSelect, setObjetoSelect] = useState({
    //     Departamento: '',
    //     Tipo:'',
    //     Precio:0,
    // });
    const inmuebleBuscar = () => { 
        
         console.log("Lo que hay dentro de inmueble buscar: ", props.ObjetoSelect.Departamento.value );
    
    }
    
    const [valorFinal, setValorFinal ] = useState(0);
 
     console.log('ObjetoSelect: ', props.ObjetoSelect);
    //  console.log('ObjetoSelect: ', props.ObjetoSelect.Departamento.value);
    //  console.log('valorFinal: ', valorFinal);

     const handleSearchChange=()=>{
        // if(!e.target.value) return setObjetoSelect(props.Inmuebles);
        const resultArray = Inmuebles.filter(obj=>obj.Departamento.includes(props.ObjetoSelect.Departamento.value))
        //|| post.body.includes(e.target.value))     
     }
    const handleSubmit = (e) => {e.preventDefault()}
    const selectInputRef = useRef();
    const onClear = () => {
      selectInputRef.current.select.clearValue();
    };

    const initial_state = { my_field: "" }

  return (
    <div className="contanedorTemporal">
    
{/* react-hook-form
formik
Option: useState para cada valores inputs. */}

    <div  className='barContainer'>
      <form className='formAlito' onSubmit={handleSubmit}>
       <div className='elementForm'>
      <Select
        className="basic-single"
        value={props.ObjetoSelect.Departamento}
        name="departamentos"
        onChange={(e)=>{console.log(e);
            props.setObjetoSelect({...props.ObjetoSelect,Departamento:e})}}
        options={optionsDepartamentos}  
        defaultValue={"Departamento"}   
        placeholder={'Departamento'}    

      />
      </div> 
      <div  className='elementForm'>
        <Select
        ref={selectInputRef}
        inputId={"my_field"}
  
        // className="basic-single"
        value={props.ObjetoSelect.Tipo}
        name="Tipo de Inmuebles"
        onChange={(e)=>{console.log(e.value);
            props.setObjetoSelect({...props.ObjetoSelect,Tipo:e})}}
        options={optionsTipoInmuebles}   
        placeholder={'Tipo inmueble'}    
        isClearable={true}
        />


      </div>
       <div className='rangeSliderPrice'>   
        <RangeSlider
            value={props.ObjetoSelect.Precio}
            tooltipPlacement='top'
            onChange={(e)=>{console.log(e);
            props.setObjetoSelect({...props.ObjetoSelect,Precio:e.target.value})}}
            min={0}
            size='lg'
            step={5000}
            max={200000}
            onAfterChange={(e) => {console.log('resultado del onAfterChange: ',e);setValorFinal(props.ObjetoSelect.Precio)}}
        />
            <p>Precio: USD {valorFinal}</p>
        </div>  
       <div className='buttonForm'>
            <button className='buttonSearch' onClick={props.InmuebleBuscar}  >Buscar</button>
        </div> 
        {/* type="submit" */}


      <div
        style={{
          color: 'hsl(0, 0%, 40%)',
          display: 'inline-block',
          fontSize: 10,
          fontStyle: 'italic',
          marginTop: '1em',
        }}
      >   
      </div>      
      </form>
    </div>              
        
    </div>
  )
}

export default BuscadorBar;