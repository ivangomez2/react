import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  //detalle de mi prod
  const [idFilt, setIdFilt] = useState(null);

  const data = [
    {
      category:"ecommerce",
      id: 1,
      Nombre: "Suscripcion Premium",
      Descripcion:
        "Exclusivo para empresas de larga trayectoria en el mercado que quieran dar un expandirse al mundo de la tecnología.",
      Caracteristicas1: "+100 productos actualizados según se requiera",
      Caracteristicas2: "Soporte 24/7 ¡Que nada te detenga!",
      Caracteristicas3: "Actualización mensual sin costo",
      Caracteristicas4: "Campaña de Ads incluida",
      Caracteristicas5: "Servicio de SEO incorporado,Competi con los mejores",
      Caracteristicas6: "Dominio y hosting GRATUITOS por 1 año",
      Precio: "U$D" + " " + 325,
      img: "https://i.ibb.co/b6fjcC5/PREMIUM.png",
      stock:3
    },
    {
      category:"ecommerce",
      id: 2,
      Nombre: "Suscripcion Platino",
      Descripcion:
        "Para cliente exigentes, el plan adecuado crea la tienda a tu medida con diseños precargados.",
      Caracteristicas1: "+30 productos actualizados según se requiera",
      Caracteristicas2: "Soporte 24/7 ¡Que nada te detenga!",
      Caracteristicas3: "Actualización mensual por 30 U$D",
      Caracteristicas4: "Campaña de Ads NO incluida (Consultar Disponibilidad)",
      Caracteristicas5: "Dominio y hosting GRATUITOS por 1 año",
      Precio: "U$D" + " " + 262,
      img: "https://i.ibb.co/frDf6s8/PLATA.png",
      stock:3
    },
    {
      category:"ecommerce",
      id: 3,
      Nombre: "Suscripcion Bronze",
      Descripcion:
        "Para cliente exigentes, el plan adecuado crea la tienda a tu medida con diseños precargados.",
      Caracteristicas1: "+30 productos actualizados según se requiera",
      Caracteristicas2: "Soporte 24/7 ¡Que nada te detenga!",
      Caracteristicas3: "Actualización mensual por 30 U$D",
      Caracteristicas4: "Campaña de Ads NO incluida (Consultar Disponibilidad)",
      Caracteristicas5: "Dominio y hosting GRATUITOS por 1 año",
      Precio: "U$D" + " " + 140,
      img: "https://i.ibb.co/qrn41dK/BRONZ.png",
      stock:3
    },

    {
      category:"service",
      id: 4,
      img:"https://picsum.photos/200",
      Nombre: "Marketing Digital",
      Descripcion: "Servicio de marketing para tu tienda virtual, te hacemos notar",
      Stock: 1,
      link: "Ver Más...",
      stock:3
      
    },
    {
      category:"service",
      id: 5,
      img:"https://picsum.photos/200",
      Nombre: "SEO service",
      Descripcion: "Aparece entre los mejores,Una busqueda puede ser la diferencia",
      Stock: 2,
      link: "Ver Más...",
      stock:3
      
    },
    {
      category:"service",
      id: 6,
      img:"https://picsum.photos/200",
      Nombre: "MEDIA service",
      Descripcion: "Cambiamos tu web,Renovate con nuestro servicio de multimedia.",
      Stock: 1,
      link: "Ver Más...",
      stock:3
      
    },

  ];

  const { id } = useParams(); // buscamos el param
  const ProdFind = data.find((prod) => prod.id == id); //usamos find para buscar el id de data que coincida con el useParams

  //rellenamos el useState con el ID

  useEffect(() => {
    const ReturnItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ProdFind);
      }, 2000);
    });
    ReturnItem.then((res) => {
      setIdFilt(res);
    });
  }, []);

  return (
    <div className="mt-5">
      {idFilt ? (
        <ItemDetail idFilt={idFilt} />
      ) : (
        <div className="spinner-grow text-info d-flex text-center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
         
    </div>
  );
};

export default ItemDetailContainer;
