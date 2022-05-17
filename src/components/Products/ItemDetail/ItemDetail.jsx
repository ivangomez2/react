import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { cartContextCont } from "../../../context/CartContext";
import { GlobalContext } from "../../../context/GlobalStateContext";
import ItemCount from "../items/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({productos: {id,Nombre, category, Descripcion, Caracteristicas1,Caracteristicas2, Caracteristicas3, Caracteristicas4, Caracteristicas5, Caracteristicas6, Precio, img, Stock},
}) => {
  // usada para agregar mis productos al carro
  const {agregarAlCarro } = useContext(cartContextCont);
  const { cantidad, quantityToAdd, cantidadComprada } = useContext(GlobalContext);

  const itemCarro = {
    id: id,
    img: img,
    category: category,
    Nombre: Nombre,
    Descripcion: Descripcion,
    Caracteristicas1: Caracteristicas1,
    Caracteristicas2: Caracteristicas2,
    Caracteristicas3: Caracteristicas3,
    Caracteristicas4: Caracteristicas4,
    Caracteristicas5: Caracteristicas5,
    Caracteristicas6: Caracteristicas6,
    Precio: Precio,
    Stock: Stock,
    cantidad: cantidadComprada
  };

  return (
    <div className="itemDetailContainer">
      <img src={img} />

      <p className="itemDetailContainer__p">{Descripcion}</p>
      <ul>
        <li>{Caracteristicas1}</li>
        <li>{Caracteristicas2}</li>
        <li>{Caracteristicas3}</li>
        <li>{Caracteristicas4}</li>
      
      </ul>

      {cantidadComprada > 0 ? (
        <Link to={"/Cart"}>
          <button className="Sumar" onClick={() =>  agregarAlCarro(itemCarro)}>Comprar</button>
        </Link>
      ) : (
        <ItemCount handleClick={quantityToAdd} Stock={Stock} />
        )  }
       
        {cantidadComprada < 0 ?(<ItemCount handleClick={quantityToAdd} Stock={Stock} /> ) : (<p></p>)}
       
    </div>
  );
};
export default ItemDetail;
