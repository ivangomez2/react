import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
//detalle de mi prod
  const [items, setItems] = useState([]);
  const data = [
    { Nombre: "Suscripcion Premium", Precio: "U$D" + " " + 325, img:"https://i.ibb.co/b6fjcC5/PREMIUM.png"},
    { Nombre: "Suscripcion Platino", Precio: "U$D" + " " + 262, img:"https://i.ibb.co/frDf6s8/PLATA.png"},
    {Nombre: "Suscripcion Bronce", Precio: "U$D" + " " + 140, img:"https://i.ibb.co/qrn41dK/BRONZ.png"}
  ];
  


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
{items.length > 0 ? (items.map((item)=>(<ItemDetail key={item.Nombre} items={item}/>))):<p>x</p>}
    </div>
  );
};

export default ItemDetailContainer;
