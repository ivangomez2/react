import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({handleClick,stock}) => {
    
    const [cantidad, setCantidad] = useState(0)
  
    const decrease =  () =>{
       cantidad > 0 ? setCantidad(cantidad - 1) : setCantidad(cantidad)
        
    }

    const increase =  () =>{
        cantidad < stock ? setCantidad(cantidad + 1) : setCantidad(cantidad)
    }


  return (
    <>
    <Link to="" onClick={() => handleClick(cantidad)}  className="btn btn-success w-100 text-light">Añadir a la cesta</Link>

    <div className="d-flex">
    <p className="text-dark text-center fs-5"> 
    <button onClick={decrease}  className="Restar">-</button>
      Estas llevando {cantidad}     
      <button onClick={increase} className="Sumar ">+</button> 
      </p>


      </div>
      </>
  )
}

export default ItemCount