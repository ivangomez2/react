import React from "react";
import Sidebar from "../../components/Nav-Footer/Sidebar/Sidebar";
import ProductContContainer from "../../components/Products/ProductsCont/ProductContContainer";

const Services = () => {
  return (
    <div>
      <Sidebar />
      <div class="content">
      <h1 style={{backgroundColor:"#0697bb",height:"63px"}} className='mt-5 pt-2 text-center text-white font-weight-bold'>Servicios</h1>
        <ProductContContainer />
      </div>
    </div>
  );
};

export default Services;
