import React, { useEffect } from "react";
import {Link} from "react-router-dom"

import "./Item.css"


const Item = ({state}) => {



  return (
    
    <div className="card cardConts mt-5 ">
    <img className="card-img-top" src={state.imagen} alt="Card image cap"/>
    <div className="card-body">
      <p className="card-text" >{state.descripcion}</p>
      <h5 className="card-title">{state.nombre}</h5>
      <div className="cardCartDiv">
    
      <Link to={`/Item/${state.id}`}>
      <button className="btn btn-info">Ver más...</button>
      </Link>
    
    </div>
  </div>
</div>
  );
}; 

export default Item;





