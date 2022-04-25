import React from "react";
import img from "../../imgs/icon.png";
import cart from "../../imgs/cart.png"


const NavBar = () => {

  return (
    <nav style={{border:" solid 1px black"}} className="bg-dark mb-5 d-flex fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Ecommerce</a>
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
              <a className="nav-link active text-light" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
       
  <span className="position-absolute badge rounded-pill bg-success">
    0
    <span className="visually-hidden">unread messages</span>
      <img style={{width:30}} src={cart}></img>
  </span>

      </div>
    </nav>
  );
};

export default NavBar;
