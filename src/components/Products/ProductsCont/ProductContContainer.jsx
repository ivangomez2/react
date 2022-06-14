import React, { useState, useEffect } from "react";
import Footer from "../../Nav-Footer/Footer/Footer";
import NavBar from "../../Nav-Footer/NavBar/NavBar";
import ProductCont from "./ProductCont";
import "./ProdItemCont.css"



const ProductContContainer = () => {
  const [params, addParams] = useState([]);
 
  const contenido = [
  {   img:"https://i.ibb.co/fSST3h8/navegador.png",
      titulo: "Tienda",
      parrafo:
        "Elegí tú plan.",
      boton: "Ir ➡",
     ruta: "/Services/MarketShop"
    },
    {
      img:"https://i.ibb.co/G9dW6Zb/seo.png",
      titulo: "Servicios",
      parrafo:"Potencia tú negocio.",
      boton: "Ir ➡",
      ruta:"/Services/MarketShop"
    },
    {
      img:"https://i.ibb.co/LYvHRNp/sitio-web.png",
      titulo: "Pagos",
      parrafo: "medios de pago.",
      boton: "Ir ➡",
      ruta: "/"
    },
  ];
  

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      resolve(contenido);
    })
      .then((res) => addParams(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    < >
      <NavBar/>
      <ProductCont params={params} />
      
    </>
  );
};

export default ProductContContainer;
