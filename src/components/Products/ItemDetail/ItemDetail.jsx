import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContextCont } from "../../../context/CartContext";
import { GlobalContext } from "../../../context/GlobalStateContext";
import Sidebar from "../../Nav-Footer/Sidebar/Sidebar";
import ItemCount from "../items/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({productos}) => {
  // usada para agregar mis productos al carro
  const {agregarAlCarro} = useContext(cartContextCont);

  const { quantityToAdd, cantidadComprada } = useContext(GlobalContext);
 

  return (
    <div>
    <Sidebar/>
<div class="content">
    <div className="card mt-5">
     <div>
      <img src={productos.img} />

      <p className="itemDetailContainer__p">{productos.descripcion}</p>
      <ul>
        <li>{productos.descripcion1}</li>
        <li>{productos.descripcion2}</li>
        <li>{productos.descripcion3}</li>
        <li>{productos.descripcion4}</li>
      </ul>
      </div>
      <div className="ItemDetail__Shop">

      {cantidadComprada > 0 ? (
        <Link to={"/Cart"}>  
          <button className="Sumar" onClick={() =>  agregarAlCarro(productos)}>Ir al carro</button>
        </Link>
      ) : (
        <ItemCount itemCarro={productos} handleClick={quantityToAdd} Stock={productos.Stock} />
        )  }
       
        {!cantidadComprada < 0 && (<ItemCount handleClick={quantityToAdd} Stock={productos.Stock} /> )}
        </div>
    </div>
    </div>
    </div>
    
  );
};
export default ItemDetail;
