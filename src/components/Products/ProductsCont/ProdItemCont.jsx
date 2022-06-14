import React from 'react'
import { Link } from 'react-router-dom'
import "./ProdItemCont.css"


const ProdItemCont = ({prod}) => {
  return (
    <div className='ProdItem__cont'>
   
       <h5>{prod.titulo}</h5> 
       <p>{prod.parrafo}</p>
      <Link to={prod.ruta}>
      <button className='btn btn-outline-secondary'>{prod.boton}</button>
      </Link>
    </div>
  )
}

export default ProdItemCont