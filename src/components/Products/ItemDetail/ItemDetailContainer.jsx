import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { db } from "../../../services/firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";
const ItemDetailContainer = () => {
  //detalle de mi prod
  const { id } = useParams(); // buscamos el param
  const [productos, setProductos] = useState([]);
  //const ProdFind = data2.find((prod) => prod.id == id); //usamos find para buscar el id de data que coincida con el useParams

  const getData = async () =>{
    const productosDb = collection(db,"detalle")
    try {
      const data = await getDocs(productosDb)
      const result = data.docs.map(doc => doc = {id:doc.id, ...doc.data()})
       const filtrado = result.find((prod) => prod.id == id)
       setProductos(filtrado)
 
    } catch (error) {
     console.log(error,"Error")  
    }

  }
  
  useEffect(() => {
    getData()
    console.log(productos)
    
  },[]);


  return (
    <div>
      {productos ? (
        <ItemDetail productos={productos} />
      ) : (
        <div
          className="spinner-grow text-info d-flex text-center"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
