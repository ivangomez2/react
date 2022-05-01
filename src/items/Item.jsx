import React, { useState } from "react";

import "./Item.css"



const Item = ({prods}) => {
 const [stock,setStock] = useState(0)

 let stockAct = prods.Stock - stock 
 let myProds = prods.Stock
 let Total = stock

  return (
    <div className="card mt-5" style={{width: "18rem"}}>
    <img className="card-img-top" src="#" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{prods.Nombre}</h5>
      <p className="card-text">{prods.Descripcion}</p>
      <a href="#" className="btn btn-primary">{prods.link}</a>
      <p className="card-text ">Disponibles {stockAct}</p>
      <div className="cardCartDiv">
      <button className="badge bg-info" onClick={()=>{stock < myProds ? setStock(stock + 1): alert("Sin Stock Disponible")}} > + </button>
      <p className="card-text">En el carro: {Total}</p>
      <button className="badge bg-info" onClick={()=>{stock > 0 ? setStock(stock - 1):alert("agrega un prodcuto al menos")}}> - </button>
</div>
    </div>
  </div>
  );
}; 

export default Item;
