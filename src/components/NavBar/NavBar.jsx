import React from 'react'
import img from "../../imgs/icon.png"
const NavBar = () => {
  return (
    <nav className='d-flex'>
      
      <img style={{width:30,margin:5}} src={img} />
       <ul className="nav justify-content-end">
      <a class="navbar-brand" href="#">Eco-MMerce</a>
  <li className="nav-item">
    <a className="nav-link active" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Descuentos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">PROMO INVIERNO</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">Proximamente</a>
  </li>
</ul>
    </nav>
  )
}

export default NavBar