import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { db } from "../../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import NavBar from "../../Nav-Footer/NavBar/NavBar";

const ItemDetailContainer = () => {

  
  const { id } = useParams(); // buscamos el param
  const [productos, setProductos] = useState([]);
  const [productosFilt, setProductosFilt] = useState([])


  const getData = async () =>{
    const productosDb = collection(db,"detalle")
    try {
      const data = await getDocs(productosDb)
      const result = data.docs.map(doc => doc = {id:doc.id, ...doc.data()})
       const findeado = result.find((prod) => prod.id == id)
       const filter = result.filter((item) => item.category == findeado.category)
       setProductos(findeado)
       setProductosFilt(filter)
      
    } catch (error) {
     console.log(error,"Error")  
    }

  }
  
  useEffect(() => {
    getData()
    
  },[id]);


  return (
    <div> <ItemDetail productos={productos} productosFilt={productosFilt} />
      </div>
  );
};

export default ItemDetailContainer;
