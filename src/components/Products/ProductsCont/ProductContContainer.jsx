import React, { useState, useEffect } from "react";
import ProductCont from "./ProductCont";


const ProductContContainer = () => {
  const [params, addParams] = useState([]);

  const contenido = [
  {   img:"https://i.ibb.co/fSST3h8/navegador.png",
      titulo: "🛒 Tienda",
      parrafo:
        "Elegí tú plan de acuerdo a tus necesidades,recordá que mientras mejor sea el plan mejores seran los beneficios.",
      boton: "Ir ➡",
     
    },
    {
      img:"https://i.ibb.co/G9dW6Zb/seo.png",
      titulo: "🏬 Servicios",
      parrafo:"Ya tenés tú tienda y queres potenciarla? Aprovecha nuestros servicios de SEO, MARKETING Y DISEÑO.",
      boton: "Ir ➡",
    },
    {
      img:"https://i.ibb.co/LYvHRNp/sitio-web.png",
      titulo: "💸 Pagos",
      parrafo: "Informate sobre las formas de pago/descuento disponibles. +80 formas de pago/cobro disponibles.",
      boton: "Ir ➡",
    },
  ];

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      resolve(contenido);
    })
      .then((res) => addParams(res))
      .catch((err) => console.log(err));

    console.log(promesa);
  }, []);

  return (
    <div className="background">
      <ProductCont params={params} />
      
    </div>
  );
};

export default ProductContContainer;
