import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div class="sidebar">
      <NavLink activeClassName="isActive" to={"/Services"}>
  <a class="active" href="#home">Tiendas</a>
  </NavLink>
  <NavLink to={"./MarketShop"}>
  <a href="#news">Tiendas</a>
  </NavLink>
  <NavLink to={"./MarketShop"}>
  <a href="#contact">Pagos</a>
  </NavLink>
  <NavLink to={"./MarketShop"}>
  <a href="#about">FAQS</a>
  </NavLink>
  <img className=' imgSideBar' src="https://i.ibb.co/F89HCFx/My-project-2.png" alt="" />
 
 <div>
   <button className='Chat'>
    Contacto @
   </button>
 </div>
</div>

  )
}

export default Sidebar