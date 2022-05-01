import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [prods, setProds] = useState([]);
  const productos = [
    {
      Nombre: "Suscripción Premium",
      Descripcion: "Paquete premium ideal para grandes empresas.",
      Stock: 3,
      link: "Ver Más...",
    
    },
    {
      id: 2,
      Nombre: "Suscripción Platino",
      Descripcion: "Paquete Platino ideal para grandes/medianas empresas.",
      Stock: 5,
     
      link: "Ver Más...",
    },
    {
      id: 3,
      Nombre: "Suscripción Bronce",
      Descripcion: "Paquete Bronce ideal para quienes recién estan comenzando.",
      Stock: 2,
      link: "Ver Más...",
      
    },
  ];

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
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
    <div >
      <ItemList prods={prods} />
    </div>
  );
};

export default ItemListContainer;
