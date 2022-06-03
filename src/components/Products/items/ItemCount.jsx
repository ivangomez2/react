import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContextCont } from "../../../context/CartContext";
import { GlobalContext } from "../../../context/GlobalStateContext";
const ItemCount = ({ Stock, itemCarro }) => {
  const { agregarAlCarro, isInCart } = useContext(cartContextCont);
  const { cantidad, setCantidad } = useContext(GlobalContext);
 
 
 ///ACA ES DONDE SE SUMAN Y RESTAN LOS PRODUCTOS
 

  const count = (e) => {
    //TOMO EL VALOR DEL INPUT Y LO SETEO EN LA CANTIDAD
   setCantidad(e.target.value)
  };
  
  


  return (
    <>
      <div className="text-dark fs-5">
        
     <div>
    
    {isInCart(itemCarro.id) ? 
    (<Link to={"/cart"} className="btn btn-success text-light"> <button className="btn btn-success text-light mt-2">Terminar Compra 💸</button> </Link>) 
    : (<input onClick={count} type={"number"} min={"1"} max={Stock} defaultValue={1} ></input>)}
          </div>
          
          {!isInCart(itemCarro.id) && 
          (<button onClick={() => agregarAlCarro({ cantidad, ...itemCarro })}
           className="btn itemCount text-light mt-2"> Agregar al carrito 🛒</button>
          )}
        </div>
    </>
  );
};

export default ItemCount;







/*  {!isInCart(itemCarro.id) && (
  <button onClick={decrease}className="btn itemCount text-light"> - </button>)}

  {!isInCart(itemCarro.id) && (
    <button onClick={increase} className="btn itemCount text-light">+</button>
  )} /*/

  /*  const decrease = () => {
    cantidad > 0
      ? setCantidad(cantidad - 1)
      : alert("Debes agregar un producto");
  };

 const increase = () =>{
     cantidad > 0
      ? setCantidad(cantidad - 1)
      : alert("Debes agregar un producto");
 
 }/*/