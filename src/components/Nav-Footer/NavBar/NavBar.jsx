import React, { useContext } from "react";
import img from "../../../imgs/icon.png";
import cart from "../../../imgs/cart.png";
import "./ResponsiveCart.css";
import { NavLink } from "react-router-dom";
import { cartContextCont } from "../../../context/CartContext";

const NavBar = () => {

  const {carrito} = useContext(cartContextCont)

  return (
    <nav
      style={{ backgroundColor: "#0697bb" }}
      className="navbar navbar-expand-lg navbar-dark fixed-top"
    >
      <div className="container-fluid">
        <NavLink to={`/`} className="navbar-brand text-light">
          Ecommerce
        </NavLink>
        { carrito.length > 0 ? (
        <span className=" cartClass badge">
          {carrito.length}
          <img style={{ width: 30 }} src={cart}></img>
        </span> ) : (<i> </i>)
        }
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navSpace ">
            <li className="nav-item">
              <NavLink to={`/Services/`} className="navbar-brand text-light">
                  Información
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                to={"/Services/MarketShop"} className="navbar-brand text-light" >
                Tienda
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                to={`/Category/ecommerce`}
                className="navbar-brand text-light"
              >
                EcoPass
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/Category/service"}
                className="navbar-brand text-light"
              >
                Servicios Adicionales
              </NavLink>

            

                <img className="iconImgNav" src={img} alt="" />
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info text-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
