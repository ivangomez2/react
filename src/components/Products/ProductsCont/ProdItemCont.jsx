import React from 'react'
import { Link } from 'react-router-dom'
import "./ProdItemCont.css"
const ProdItemCont = ({prod}) => {
  return (
      
    <div className='ProdItem__cont'>
 

        <div className=''>
        <img src={prod.img} alt="" />
        </div>
      <h4>{prod.titulo}</h4>
      <p>{prod.parrafo}</p>
      <Link to={prod.ruta}>
      <button className='btn btn-info'>{prod.boton}</button>
      </Link>
      
    </div>
  )
}

export default ProdItemCont