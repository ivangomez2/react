import React from "react";
import Item from "./Item";

const ItemList = ({prods}) => {
  console.log(prods,"itemlist")
  return (
    <div className=" gridCards CardsCont">
      {prods.length > 0 ? prods.map((prod) => <Item prods={prod}/>) :<div className="spinner-grow text-info d-flex text-center" role="status">
          <span className="sr-only">Loading...</span>
        </div>}
    </div>
  );
};

export default ItemList;
