import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
//detalle de mi prod
  const [items, setItems] = useState([]);
  const data = [
    {id:1, Nombre: "Suscripcion Premium", Precio: "U$D" + " " + 325, img:"https://i.ibb.co/b6fjcC5/PREMIUM.png"}, ];
  


  useEffect(() => {
    //funcion que retorna promesa y resuelve con delay de 2sec
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      },2000);
    });
    getItem.then((res) => {
      setItems(res);
      }).catch((err) => {
        console.log(err);
      });
    
  }, []);

  return (
    <div>
{items.length > 0 ? (items.map((item)=> (<ItemDetail key={item.Nombre} items={item}/>))):<p>x</p>}
    </div>
  );
};

export default ItemDetailContainer;
