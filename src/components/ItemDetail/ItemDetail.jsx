import React from "react";

const ItemDetail = ({items}) => {
  console.log(items)
  return (
    <div>
      <p>{items?.img}</p>
      <p>{items?.Nombre}</p>
      <p>{items?.Precio}</p>
      
    </div>
  );
};

export default ItemDetail;
