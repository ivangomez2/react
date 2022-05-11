import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./Item.css"
import { data } from "../../../config";
const ItemListContainer = ({productos}) => {
  const [prods, setProds] = useState([]);
  

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos ? productos : data);
      }, 2000);
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
      <ItemList  prods={prods} />
    </div>
  );
};

export default ItemListContainer;
