import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContextCont } from "../../../context/CartContext";
import { GlobalContext } from "../../../context/GlobalStateContext";

const ItemCount = ({handleClick,Stock}) => {


    const {cantidad,setCantidad} = useContext(GlobalContext)
    
    const decrease =  () =>{
       cantidad > 0 ? setCantidad(cantidad - 1) : setCantidad(cantidad)
        
    }

    const increase =  () =>{
        cantidad < Stock ? setCantidad(cantidad + 1) : setCantidad(cantidad)
    }


  return (
   
    <>

    <div className="d-flex">
    <p className="text-dark text-center fs-5"> 
    <button onClick={decrease}  className="Restar">Eliminar</button>
      {cantidad > 0 ? <p className="text-success"><Link to="" onClick={() => handleClick(cantidad) }  className="btn btn-success w-100 text-light">PAGAR</Link></p> : <p></p>}    
     <button onClick={increase} className="Sumar ">Añadir al carrito 🛒</button>
      </p>


      </div>
      </>
  )
}

export default ItemCount