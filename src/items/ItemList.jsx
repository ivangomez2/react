import React from "react";
import Item from "./Item";

const ItemList = ({prods}) => {
  return (
    <div className="d-flex CardsCont">
      {prods.length > 0 ? prods.map((prod) => <Item prods={prod}/>) : <p>Cargando....</p>}
    </div>
  );
};

export default ItemList;
