import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Sidebar from '../../components/Nav-Footer/Sidebar/Sidebar'
import { data } from '../../config'

import ItemListContainer from '../../components/Products/items/ItemListContainer'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase'



const Category = () => {
  const [filtro, setFiltro] = useState([]);

  const { id } = useParams(); // buscamos el param
 // const ProdFind = data.filter((prod) => prod.category == category); //usamos find para buscar el id de data que coincida con el useParams

  const FilterData = async () =>{
    const productosDb = collection(db,"productos")
    try {
      const data = await getDocs(productosDb)
      const result = data.docs.map(doc => doc = {id:doc.categoria, ...doc.data()})
       const filtrado = result.filter((prod) => prod.categoria == id)
       setFiltro(filtrado)
      console.log(filtrado)
    } catch (error) {
     console.log(error,"Error")  
    }

  }
 
 useEffect(()=>{
 FilterData()
 },[])
 
 
  //rellenamos el useState con el ID

 /* useEffect(() => {
    const ReturnItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ProdFind);
      }, 2000);
    });
    ReturnItem.then((res) => {
      setFiltro(res);
    });
  }, []);
*/
  return (
    <div>
    <Sidebar/>
<div class="content">
    <div className="mt-5">
      {filtro ? (
        <ItemListContainer productos={filtro} />
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