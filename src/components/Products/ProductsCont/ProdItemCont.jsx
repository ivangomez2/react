import React from 'react'
import "./ProdItemCont.css"
const ProdItemCont = ({prod}) => {
  return (
      
    <div className='ProdItem__cont'>
 

        <div className=''>
        <img src={prod.img} alt="" />
        </div>
      <h4>{prod.titulo}</h4>
      <p>{prod.parrafo}</p>
      <button className='btn btn-info'>{prod.boton}</button>
     
      
    </div>
  )
}

export default ProdItemCont