import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Sidebar from '../../components/Nav-Footer/Sidebar/Sidebar'
import "../../components/Products/items/Item.css"
import { db } from '../../services/firebase'
import { collection, getDocs } from 'firebase/firestore'
import ItemList from '../../components/Products/items/ItemList'
import {Dropdown,Spinner} from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import Footer from '../../components/Nav-Footer/Footer/Footer'
import NavBar from '../../components/Nav-Footer/NavBar/NavBar'



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
  
  }, [category])
  
  return (
    <div>
      <NavBar/>
    <Sidebar/>
<div className="content">
    <div className="mt-5">
 <Dropdown className='dropDownPos'>
  <Dropdown.Toggle className='text-light' variant="info" id="dropdown-basic">
    {category}
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <NavLink to={"/Services/MarketShop"}>
    <Dropdown.Item href="#/action-1">Todos los productos</Dropdown.Item>
    </NavLink>
    <NavLink to={"/Category/Servicio"}>
    <Dropdown.Item href="#/action-2">Servicios</Dropdown.Item>
    </NavLink>
    <NavLink to={"/Category/Suscripción"}>
    <Dropdown.Item href="#/action-3">Suscripción</Dropdown.Item>
    </NavLink>
  </Dropdown.Menu>
</Dropdown>
     
        <ItemList state={filtro} /> 
 <div className='item__footer'>
    </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Category