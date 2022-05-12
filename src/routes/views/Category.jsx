import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Sidebar from '../../components/Nav-Footer/Sidebar/Sidebar'
import { data } from '../../config'

import ItemListContainer from '../../components/Products/items/ItemListContainer'
import Item from '../../components/Products/items/Item'


const Category = () => {
  const [filtro, setFiltro] = useState({});

  const { category } = useParams(); // buscamos el param
  const ProdFind = data.filter((prod) => prod.category == category); //usamos find para buscar el id de data que coincida con el useParams

  //rellenamos el useState con el ID

  useEffect(() => {
    const ReturnItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ProdFind);
      }, 2000);
    });
    ReturnItem.then((res) => {
      setFiltro(res);
    });
  }, []);

  return (
    <div className="mt-5">
      {filtro ? (
        <ItemListContainer productos={ProdFind} />
      ) : (
        <div className="spinner-grow text-info d-flex text-center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default Category