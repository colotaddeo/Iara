import React from 'react'
import './notfound.css';

const notFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found__h1'>
        <h1>Error 404 <br></br> Página no encontrada</h1>
        <p>Lo sentimos, la página solicitada no existe. <br></br> intenta de nuevo</p>
      </div> 
    </div>
  )
}

export default notFound