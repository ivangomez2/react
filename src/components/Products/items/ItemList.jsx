import React from "react";
import Item from "./Item";
import { Spinner } from "react-bootstrap";

const ItemList = ({state}) => {
  return (
    <div className=" itemCont mr-4">
      {state.length > 0 ? state.map((prods,index) => <Item key={index} state={prods}/>) : <Spinner className="spinner" animation="border" variant="info" />}
    </div>
  );
};

export default ItemList;
