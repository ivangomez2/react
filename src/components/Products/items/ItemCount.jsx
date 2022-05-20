import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContextCont } from "../../../context/CartContext";
import { GlobalContext } from "../../../context/GlobalStateContext";

const ItemCount = ({ handleClick, Stock, itemCarro }) => {
  const { agregarAlCarro, isInCart } = useContext(cartContextCont);
  const { cantidad, setCantidad } = useContext(GlobalContext);



  const decrease = () => {
    !cantidad > 0 && setCantidad(- 1)
   
  };

  const increase = () => {
    cantidad < Stock ? setCantidad(cantidad + 1) : setCantidad(cantidad);
  };

  return (
    <>
      <div className="d-flex">
        <p className="text-dark text-center fs-5">
          <button onClick={decrease} className="btn btn-danger w-75 text-light">
            Eliminar 🔌
          </button>
          {isInCart(itemCarro.id) ? (
            <button className="btn btn-success p-0 w-75 text-light mt-2">
              <Link
                to={"/cart"}
                onClick={() => handleClick(cantidad)}
                className="btn btn-success w-75 text-light"
              >
                PAGAR 💸
              </Link>
            </button>
          ) : (
           <h5>Disponible:{Stock}</h5>
          )}
        {!isInCart(itemCarro.id)  && 
         <button onClick={() => agregarAlCarro({ cantidad, ...itemCarro }) }  className="btn btn-info w-75 text-light mt-2">
              Añadir al carrito 🛒
            </button>
          }
        </p>
      </div>
    </>
  );
};

export default ItemCount;
