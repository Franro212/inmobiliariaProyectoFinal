import React from 'react';
import Header from '../Header/Header';
import BuscadorBar from '../BuscadorBar/BuscadorBar';
import '../../App.css';
import './buscadorpage.css';



function BuscadorPage() {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div className='buscadorbarContainer'>
      <BuscadorBar/>  
    </div>

    </>
  )
}

export default BuscadorPage;