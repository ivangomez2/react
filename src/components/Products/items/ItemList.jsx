import React from "react";
import Item from "./Item";

const ItemList = ({state}) => {
  return (
    <div className="gridCards mr-4">
      {state.length > 0 ? state.map((prods) => <Item state={prods}/>) : <p>Cargando....</p>}
    </div>
  );
};

export default ItemList;
