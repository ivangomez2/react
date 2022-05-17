import React from "react";
import {Link} from "react-router-dom"

import "./Item.css"




const Item = ({prods}) => {

  

  return (
    
    <div className="card cardConts mt-5 ">
    <img className="card-img-top" src={prods.img} alt="Card image cap"/>
    <div className="card-body">
      <p className="card-text" >{prods.Descripcion}</p>
      <h5 className="card-title">{prods.Nombre}</h5>
      <div className="cardCartDiv">
    
      <Link to={`/Item/${prods.id}`}>
      <button className="btn btn-info">Ver más...</button>
      </Link>
    
</div>
     
     
    </div>
  </div>
  );
}; 

export default Item;





