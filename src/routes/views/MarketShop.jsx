import React from 'react'
import NavBar from '../../components/Nav-Footer/NavBar/NavBar'
import Sidebar from '../../components/Nav-Footer/Sidebar/Sidebar'
import ItemListContainer from '../../components/Products/items/ItemListContainer'
import "../../components/Products/items/Item.css"
import {Dropdown} from "react-bootstrap"
import { NavLink } from 'react-router-dom'

const MarketShop = () => {
  return (
    
    <div>
    <NavBar/>
   <Sidebar/>
 <div class="content">
 <h1 className='titleProds'>Productos</h1>


 <Dropdown className='dropDownPos'>
  <Dropdown.Toggle className='text-light ' variant="info" id="dropdown-basic">
    Productos
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

<ItemListContainer/>
</div>
</div>

   
  )
}

export default MarketShop