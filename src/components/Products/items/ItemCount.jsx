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

    <p className="text-dark text-center fs-5"> 
    <i onClick={decrease}  className="text-ligth">-</i>
      La cantidad es {cantidad}      
      <i onClick={increase} className="text-ligth">+</i> 
      </p>


    </>

  )
}

export default ItemCount