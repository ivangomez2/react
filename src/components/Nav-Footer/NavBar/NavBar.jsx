import React, { useContext } from "react";
import img from "../../../imgs/icon.png";
import cart from "../../../imgs/cart.png";
import "./ResponsiveCart.css";
import { NavLink , Link} from "react-router-dom";
import { cartContextCont } from "../../../context/CartContext";

const NavBar = () => {

  const {carrito} = useContext(cartContextCont)

  return (
    <nav
      style={{ backgroundColor: "#0697bb" }}
      className="navbar navbar-expand-lg navbar-dark fixed-top"
    >
      <div className="navbar__separate container-fluid">
        <NavLink to={`/`} className="navbar-brand text-light">
          Ecommerce
        <img className="iconImgNav" src={img} alt="" />
        </NavLink>
        { carrito.length > 0 ? (
          <Link to={"/Cart"}>
        <span className=" cartClass badge">
          {carrito.length}
          <img style={{ width: 30 }} src={cart}/>
        </span> </Link>) : (<i> </i>)
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
              <NavLink  to={`/Services/`} className="navbar-brand text-light active">
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
                to={`/Category/Suscripción`}
                className="navbar-brand text-light"
              >
                EcoPass
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/Category/Servicio"}
                className="navbar-brand text-light"
              >
                Servicios Adicionales
              </NavLink>

         
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
