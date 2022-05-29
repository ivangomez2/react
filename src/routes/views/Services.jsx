import React from "react";
import Sidebar from "../../components/Nav-Footer/Sidebar/Sidebar";
import ProductContContainer from "../../components/Products/ProductsCont/ProductContContainer";
import "../../App.css"
const Services = () => {

  return (
    <div>
      <Sidebar />
      <div class="content">
      <h1  className=' text-center titleService text-white font-weight-bold'>Servicios</h1>
       
        <ProductContContainer />
      </div>

      
    </div>
  );
};

export default Services;
