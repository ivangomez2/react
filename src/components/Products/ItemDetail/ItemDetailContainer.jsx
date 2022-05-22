import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { data2 } from "../../../config";
import { db } from "../../../services/firebase";
import { cartContextCont } from "../../../context/CartContext";
const ItemDetailContainer = () => {
  //detalle de mi prod
  const {carrito} = useContext(cartContextCont)
  const { id } = useParams(); // buscamos el param
  const [productos, setProductos] = useState([]);
  const ProdFind = data2.find((prod) => prod.id == id); //usamos find para buscar el id de data que coincida con el useParams

  useEffect(() => {
    const ReturnItem = new Promise((resolve, reject) => {
        resolve(ProdFind);
    });
    ReturnItem.then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div>
      {productos ? (
        <ItemDetail productos={productos} />
      ) : (
        <div
          className="spinner-grow text-info d-flex text-center"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
