import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContextCont } from "../../../context/CartContext";
import { useParams } from "react-router";
const ItemCount = ({ Stock, itemCarro }) => {
  const { agregarAlCarro, isInCart } = useContext(cartContextCont);
  const [cantidad, setCantidad] = useState(1);
  const { id } = useParams();
  //TOMO EL VALOR DEL INPUT Y LO SETEO EN LA CANTIDAD
  const count = (e) => {
    setCantidad(e.target.value);
  };

  const sumar = () => {
    cantidad < Stock && setCantidad(cantidad + 1);
  };

  const restar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  useEffect(() => {
    console.log("change");
    setCantidad(1);
  }, [id]);

  return (
    <>
      <div className>
        <div className="itemCount__responsiveInput">
          {isInCart(itemCarro.id) ? (
            <Link to={"/cart"} className="btn btn-success text-light">
              
              <button className="btn btn-success text-light">
                Terminar Compra 💸
              </button>
            </Link>
          ) : (
            <input
              onChange={count}
              type={"number"}
              min={"1"}
              max={Stock}
              value={cantidad}
            ></input>
          )}
        </div>
        <div className="itemCount__responsiveButtons">
          {isInCart(itemCarro.id) ? (
            <Link to={"/cart"} className="btn btn-success text-light">
              
              <button className="btn btn-success text-light">
                Terminar Compra 💸
              </button>
            </Link>
          ) : (
            <>
              <button
                className="btn btn-info itemCount__btn"
                onClick={() => {
                  restar();
                }}
              >
                -
              </button>
              <p>{cantidad}</p>
              <button
              className="btn btn-info itemCount__btn"
              onClick={() => {
                  sumar();
                }}
              >
                +
              </button>
            </>
          )}

        
        </div>
        
      </div>
      {!isInCart(itemCarro.id) && (
            <button
              onClick={() => agregarAlCarro({ cantidad, ...itemCarro })}
              className="btn itemCount text-light mt-2"
            >
              
              Agregar al carrito 🛒
            </button>
          )}
    </>
  );
};

export default ItemCount;

/*  {!isInCart(itemCarro.id) && (
  <button onClick={decrease}className="btn itemCount text-light"> - </button>)}

  {!isInCart(itemCarro.id) && (
    <button onClick={increase} className="btn itemCount text-light">+</button>
  )} /*/

/*  const decrease = () => {
    cantidad > 0
      ? setCantidad(cantidad - 1)
      : alert("Debes agregar un producto");
  };

 const increase = () =>{
     cantidad > 0
      ? setCantidad(cantidad - 1)
      : alert("Debes agregar un producto");
 
 }/*/
