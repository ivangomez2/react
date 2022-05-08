import React from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({idFilt}) => {
  console.log(idFilt)
  return (
    <div className="mt-5">
     <img src={idFilt.img}/>
     <p>{idFilt.Descripcion}</p>
 <ul>
   <li>{idFilt.Caracteristicas1}</li>
   <li>{idFilt.Caracteristicas2}</li>
   <li>{idFilt.Caracteristicas3}</li>
   <li>{idFilt.Caracteristicas4}</li>
   <li>{idFilt.Caracteristicas5}</li>
   <li>{idFilt?.Caracteristicas6}</li>
 </ul>
    
     <h3>{idFilt.Precio}</h3>
     <h1>{idFilt.Nombre}</h1>

    </div>
  );
};

export default ItemDetail;
