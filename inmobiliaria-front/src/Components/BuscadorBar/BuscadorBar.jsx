import React from 'react';
import { Button } from 'react-bootstrap-buttons';
import './buscadorbar.css';

function BuscadorBar() {
  return (
    <>
        <form className='formContainer'>
        <ul className="ulForm"> 
    
        {/*--------- Lista de Departamentos -----------*/}
        <li className="liForm">
            <p>Departamento</p>
            {/* <Accordion flush >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header onClick={onClickUsuarios}>Lista de Usuarios</Accordion.Header>
                        <Accordion.Body>
                            {usuarios && usuarios.map((user)=>{
                        return <div key={user.inmueble_id}>
                            <p>{user.email}</p>
                        </div>
                        })}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}
        </li>
        {/*--------- Lista de Tipo de Inmueble -----------*/}
    
        <li className="liForm">
            <p>Tipo de Inmueble</p> 
        </li>
        {/*--------- Precio -----------*/}
        <li className="liForm">
            <p>Precio</p> 
        </li>
        <Button variant="primary" type="submit">Buscar</Button>

        </ul>

        </form>
    </>
  )
}

export default BuscadorBar;