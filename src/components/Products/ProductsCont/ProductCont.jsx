import React, { useState, useEffect } from "react";
import ImgText from "../../SectTextImg/ImgText";

const ProductCont = () => {
  const [cont, AddCont] = useState([]);

  const contenido = [
    {
      id: 1,
      titulo: "Tienda Online",
      parrafo:
        "Elegí tu plan de acuerdo a tus necesidades,recorda que mientras mejor sea el plan mejores seran los beneficios.",
      boton: "Ir a tiendas online",
      clase: "ImgDisplay",
      display: "ImgHidden",
      linkShop:"/Services/MarketShop"
    },
    {
      id: 2,
      titulo: "Servicios",
      parrafo:
        "Ya tenés tu tienda y queres potenciarla? Aprovecha nuestros servicios de SEO, MARKETING Y DISEÑO",
      boton: "Ir a servicios",
      clase: "ImgDisplay",
      display: "ImgHidden",
      linkShop:"/Services/ServiceShop"
    },
    {
      id: 3,
      titulo: "Formas de pago",
      parrafo: "Informate sobre las formas de pago/descuento disponibles,Tambíen despejaremos tus dudas respecto al cobro.",
      boton: "Ir a formas de pago",
      clase: "ImgDisplay",
      display:"ImgHidden",
      linkShop:"/Services/PaymentFaqs"
    },
  ];

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      resolve(contenido);
    })
      .then((res) => AddCont(res))
      .catch((err) => console.log(err));

    console.log(promesa);
  }, []);

  return (
    <div className="background">
      <ImgText cont={cont} />
    </div>
  );
};

export default ProductCont;
