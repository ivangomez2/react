import React from "react";
import img from "../../imgs/icon.png";
import cart from "../../imgs/cart.png"
import "./ResponsiveCart.css"
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <nav style={{backgroundColor:"#0697bb"}} className="mb-5 d-flex fixed-top">
      <div className="container-fluid">
        <NavLink to={`/`} className="navbar-brand text-light">Ecommerce</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon color-white m-10 text-center"><img className="w-100" src={img} alt="" /></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink to="/" className="nav-link active text-light" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/"  className="nav-link text-light">
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/"  className="nav-link text-light">
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
       
  <span className=" cartClass badge rounded-pill">
    0
    
      <img style={{width:30}} src={cart}></img>
  </span>

      </div>
    </nav>
  );
};

export default NavBar;
