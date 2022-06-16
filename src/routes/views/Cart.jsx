import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link,useParams } from "react-router-dom";
import BuyForm from "../../components/Forms/BuyerForm/BuyForm";
import { cartContextCont } from "../../context/CartContext";
import "../../index.css";
import banner from "../../imgs/banner.png";


const Cart = () => {
  const { setCarrito,carrito, deleteAll, deleteOne, costoTotal } = useContext(cartContextCont);
  const [cantidad,setCantidad] = useState()
   
  console.log(carrito)
  
  const pricing = (e) =>{

   

      let event = e.target.value
     setCantidad(event)

      console.log(cantidad);

    
   
    return pricing

  }
  
  
useEffect(() => {
 console.log("hello");
}, [cantidad])

  


  return (
    <div className="mt-4 w-100 p-4">
      <img className="cart__banner" src={banner} alt="banner" />
      <div className="cart__tableFormCont">
        {/*Se encarga de mostrar la tabla solo si hay productos*/}
        {carrito.length > 0 && (
          <Table
            className="cart__table"
            striped
            bordered
            hover
            responsive="md"
            borderless="false"
          >
            <thead className="cart__thead">
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th className="cart__responsive">Borrar</th>
              </tr>
            </thead>

            <tbody className="cart__InfoBody">
              {/* Se encarga de mapear cada producto con sus props dentro de la tabla*/}
              {carrito.length > 0 &&
                carrito.map((prod , index) => {
                  return (
                    <tr className="cart__infoTr">
                      <td className="Cart__Img">
                        <img src={prod.img} /> {prod.nombre}
                      </td>
                      <td>{prod.cantidad}</td>
                      <td> €{prod.precio}</td>
                      <td className="cart__responsive" onClick={() => deleteOne(prod.id)}>✖</td>
                    </tr>
                  );
                })}
            </tbody>
            <td>Total: €{costoTotal()}</td>
          </Table>
        )}
        {carrito.length > 0 && <BuyForm />}
      </div>
      {/*Si el carrito está vacio */}
      {carrito.length <= 0 ? (
        <div className="cart__noProducts">
          <h5 className="sr-only">Aquí no hay productos...</h5>
          <Link to={"/Services/MarketShop"}>
            <button className="btn btn-dark text-light">Volver a la tienda🛒</button>
          </Link>
        </div>
      ) : (
        <div className="Cart__buttonsCont">
          <button className="btn btn-danger text-light" onClick={deleteAll}>
            Eliminar Todo
          </button>
          <Link to={"/Services/MarketShop"}>
            <button className="btn btn-dark text-light">
              Seguir comprando
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
