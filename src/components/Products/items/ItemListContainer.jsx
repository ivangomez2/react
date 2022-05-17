import { useState, useEffect, useContext } from "react";
import ItemList from "./ItemList";
import "./Item.css"
import { data } from "../../../config";
import { GlobalContext } from "../../../context/GlobalStateContext";

const ItemListContainer = ({productos}) => {
  const {prods,setProds} = useContext(GlobalContext)
  
  

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos ? productos : data);
      }, 100);
    })
      .then((res) => {
        setProds(res);
      })
      .catch((err) => console.log(err))
      .then(() => console.log(prods));

    console.log(promesa);
  }, []);

  return (
    <div className="gridCards">
      <ItemList prods={prods} />
    </div>
  );
};

export default ItemListContainer;
