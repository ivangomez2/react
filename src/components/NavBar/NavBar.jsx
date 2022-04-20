import React from "react";
import img from "../../imgs/icon.png";
const NavBar = () => {
  return (
    <nav style={{border:" solid 1px black"}} className="bg-dark mb-5">
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
      </div>
    </nav>
  );
};

export default NavBar;
