import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./Item.css"
import ItemCount from "./ItemCount";



const Item = ({prods}) => {


  return (
    
    <div className="card mt-5 " style={{width: "18rem"}}>
    <img className="card-img-top" src={prods.img} alt="Card image cap"/>
    <div className="card-body">
      <h4 className="card-title">{prods.Nombre}</h4>
      <p className="card-text" style={{color:"gray"}}>{prods.Descripcion}</p>
      <div className="cardCartDiv">
    
      <Link to={`/Item/${prods.id}`}>
      <p>Detalle</p>
      </Link>
    
</div>
     
     
    </div>
  </div>
  );
}; 

export default Item;





