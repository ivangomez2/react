import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  //detalle de mi prod
  const [idFilt, setIdFilt] = useState(null);

  const data = [
    {
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
    },
    {
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
    },
    {
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
        <div class="spinner-grow text-info d-flex text-center" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
