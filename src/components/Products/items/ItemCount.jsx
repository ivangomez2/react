import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContextCont } from "../../../context/CartContext";
import { GlobalContext } from "../../../context/GlobalStateContext";

const ItemCount = ({ handleClick, Stock, itemCarro }) => {
  const { agregarAlCarro, isInCart } = useContext(cartContextCont);
  const { cantidad, setCantidad } = useContext(GlobalContext);

  useEffect(() => {
    console.log(cantidad);
  }, [cantidad]);

  const decrease = () => {
    cantidad > 0
      ? setCantidad(cantidad - 1)
      : alert("Debes agregar un producto");
  };

  const increase = () => {
    cantidad < Stock ? setCantidad(cantidad + 1) : setCantidad(cantidad);
  };

  return (
    <>
      <div className="d-flex">
        <p className="text-dark text-center fs-5">
          {!isInCart(itemCarro.id) && (
            <button
              onClick={decrease}
              className="btn btn-danger w-75 text-light"
            >
              - 🔌
            </button>
          )}

          {!isInCart(itemCarro.id) && (
            <button
              onClick={increase}
              className="btn btn-danger w-75 text-light"
            >
              + ⚡
            </button>
          )}

          {isInCart(itemCarro.id) ? (
            <button className="btn btn-success p-0 w-75 text-light mt-2">
              <Link to={"/cart"} className="btn btn-success w-75 text-light">
                Terminar Compra 💸
              </Link>
            </button>
          ) : (
            <h5>Cantidad {cantidad}</h5>
          )}
          {!isInCart(itemCarro.id) && (
            <button
              onClick={() => agregarAlCarro({ cantidad, ...itemCarro })}
              className="btn btn-info w-75 text-light mt-2"
            >
              Añadir🛒
            </button>
          )}
        </p>
      </div>
    </>
  );
};

export default ItemCount;
