import React, {useState, useRef} from 'react';

import RangeSlider from 'react-bootstrap-range-slider';
import Select from 'react-select';
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
 

function BuscadorBar(props) {
    // const [ObjetoSelect, setObjetoSelect] = useState({
    //     Departamento: '',
    //     Tipo:'',
    //     Precio:0,
    // });
 
    
    const [valorFinal, setValorFinal ] = useState(0);
    const[price,setPrice] = useState('')

     console.log('ObjetoSelect: ', props.ObjetoSelect);
    //  console.log('ObjetoSelect: ', props.ObjetoSelect.Departamento.value);
    //  console.log('valorFinal: ', valorFinal);

   
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
        value={props.ObjetoSelect.departamento}
        name="departamentos"
        onChange={(e)=>{console.log(e);
            props.setObjetoSelect({...props.ObjetoSelect,departamento:e})}}
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
        value={props.ObjetoSelect.tipo_inmueble}
        name="Tipo de Inmuebles"
        onChange={(e)=>{console.log(e.value);
            props.setObjetoSelect({...props.ObjetoSelect,tipo_inmueble:e})}}
        options={optionsTipoInmuebles}   
        placeholder={'Tipo inmueble'}    
        // isClearable={true}
        />


      </div>
       <div className='rangeSliderPrice'>  
       {/* <input
        // type="text"
        value={price}
        onChange={(e)=>{console.log(e);
          props.setObjetoSelect({...props.ObjetoSelect,precio:e.target.value});setPrice(e.target.value)}}></input> */}
        


        <RangeSlider
            value={props.ObjetoSelect.precio}
            tooltipPlacement='top'
            onChange={(e)=>{console.log(e);
            props.setObjetoSelect({...props.ObjetoSelect,precio:e.target.value});setPrice(e.target.value)}}
            min={0}
            size='lg'
            step={5000}
            max={200000}
            onAfterChange={(e) => {console.log('resultado del onAfterChange: ',e);setValorFinal(props.ObjetoSelect.precio)}}
        />
            <p>Máx. precio: U$S{valorFinal.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</p>
        </div>  
       <div className='buttonForm'>
          <button className='buttonSearch' 
              onClick={()=>{console.log('resultado del onClick en Button: '+ props.ObjetoSelect.departamento.value + props.ObjetoSelect.tipo_inmueble.value);
              props.onClickFiltrar({"departamento":props.ObjetoSelect.departamento,
              "tipo_inmueble": props.ObjetoSelect.tipo_inmueble,
              "precio": props.ObjetoSelect.precio
            })
            }}>Buscar
          </button>
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