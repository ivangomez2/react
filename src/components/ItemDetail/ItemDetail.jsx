import React from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({items}) => {
  console.log(items)
  return (
    <div>
      <img src={items.img} />
      <p>{items.id}</p>
      <p>{items?.Nombre}</p>
      <p>{items?.Precio}</p>
    <Link to={`/Prueba/${items.id}`}>
      <p>Detalle</p>
      </Link>
    </div>
  );
};

export default ItemDetail;
