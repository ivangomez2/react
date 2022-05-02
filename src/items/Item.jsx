import React, { useState } from "react";

import "./Item.css"



const Item = ({prods}) => {
 const [stock,setStock] = useState(0)

 let stockAct = prods.Stock - stock 
 let myProds = prods.Stock
 let Total = stock

  return (
    <div className="card mt-5" style={{width: "18rem"}}>
    <img className="card-img-top" src={prods.img} alt="Card image cap"/>
    <div className="card-body">
      <h4 className="card-title">{prods.Nombre}</h4>
      <p className="card-text">{prods.Descripcion}</p>
   
      <p className="card-text ">Disponibles {stockAct}</p>
      <div className="cardCartDiv">
      <button style={{ backgroundColor:"#0697BB"}} className="badge rounded-pill p-2" onClick={()=>{stock > 0 ? setStock(stock - 1):alert("agrega un prodcuto al menos")}}> - </button>
      <p className="card-text">En el carro: {Total}</p>
      <button style={{ backgroundColor:"#0697BB"}} className="badge rounded-pill  p-2" onClick={()=>{stock < myProds ? setStock(stock + 1): alert("Sin Stock Disponible")}} > + </button>
      <a href="#">{prods.link}</a>
</div>
     
     
    </div>
  </div>
  );
}; 

export default Item;





