import React from "react";
import img from "../../../imgs/icon.png";
import cart from "../../../imgs/cart.png";
import "./ResponsiveCart.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{ backgroundColor: "#0697bb" }}
      className="navbar navbar-expand-lg navbar-dark fixed-top"
    >
      <div className="container-fluid">
        <NavLink to={`/`} className="navbar-brand text-light">
          Ecommerce
        </NavLink>
        <span className=" cartClass badge">
            0<img  style={{ width: 30 }} src={cart}></img>
          </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink to={`/Services/MarketShop`} className="navbar-brand text-light">
                Tienda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/Category/ecommerce`} className="navbar-brand text-light">
                EcoPass
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/Category/service"}
                className="navbar-brand text-light"
               
              >
                Servicios Adicionales
                <img className="iconImgNav" src={img} alt="" />
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info text-light" type="submit">Search</button>
      </form>
        </div>
        
      </div>
    </nav>
  );
};

export default NavBar;