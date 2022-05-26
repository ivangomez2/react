import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Sidebar from '../../components/Nav-Footer/Sidebar/Sidebar'
import ItemListContainer from '../../components/Products/items/ItemListContainer'
import { db } from '../../services/firebase'
import { collection, getDocs } from 'firebase/firestore'
import Item from '../../components/Products/items/Item'
import ItemList from '../../components/Products/items/ItemList'



const Category = () => {
  const [filtro, setFiltro] = useState([]);
  const { category } = useParams(); // buscamos el param

  //rellenamos el useState con category
  const getData = async () =>{
    const productosDb = collection(db,"productos")
    try {
      const data = await getDocs(productosDb)
      const result = data.docs.map(doc => doc = {id:doc.id, ...doc.data()})
       const filtrado = result.filter((prod) => prod.categoria == category)
       setFiltro(filtrado)
  
    } catch (error) {
     console.log(error,"Error")  
    }

  }
  
  useEffect(() => {
  getData()  

  }, [filtro])
  
  return (
    <div>
    <Sidebar/>
<div class="content">
    <div className="mt-5">
      {filtro ? (
        <ItemList state={filtro} />  
      ) : (
        <div className="spinner-grow text-info d-flex text-center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      </div>
    </div>
    </div>
  );
}

export default Category