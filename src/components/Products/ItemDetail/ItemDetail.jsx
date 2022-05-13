import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ItemCount from "../items/ItemCount";

const ItemDetail = ({ idFilt , loading=true}) => {
  const [cantidadComprada, setCantidadComprada] = useState(0);

  
  const quantityToAdd = (cantidad) => {
    setCantidadComprada(cantidad);
    
  };

  return (
    <div className="mt-5">
      <img src={idFilt.img} />
      <p>{idFilt.Descripcion}</p>
      <ul>
        <li>{idFilt.Caracteristicas1}</li>
        <li>{idFilt.Caracteristicas2}</li>
        <li>{idFilt.Caracteristicas3}</li>
        <li>{idFilt.Caracteristicas4}</li>
        <li>{idFilt.Caracteristicas5}</li>
        <li>{idFilt?.Caracteristicas6}</li>
        <li>stock {idFilt?.stock}</li>
      </ul>

      <h3>{idFilt.Precio}</h3>
      <h1>{idFilt.Nombre}</h1>
      {cantidadComprada > 0 ? (
        <Link to={"/cart"}>
        terminar compra
        </Link>
      ) : (
        <ItemCount handleClick={quantityToAdd} stock={idFilt.stock} />
      )}

  
    </div>
  );
};
export default ItemDetail;
