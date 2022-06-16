import React from "react";
import Sidebar from "../../components/Nav-Footer/Sidebar/Sidebar";
import ProductContContainer from "../../components/Products/ProductsCont/ProductContContainer";
import "../../App.css";
import slideOne from "../../imgs/laptopcoffe.jpg";
import slideTwo from "../../imgs/laptopcoffe2.jpg";
import Carrousel from "../../components/UIComponents/Carrousel";
import Footer from "../../components/Nav-Footer/Footer/Footer";

const Services = () => {
  return (
    <div>
      
      <div className="services__sidebar"><Sidebar /></div>
      <h1 className=" text-center titleService text-white font-weight-bold">
          Servicios
        </h1>
        <img src={slideTwo} className="services__imgs"/>
        
      <div className="content services__content">
       
        <Carrousel
          img={slideOne}
          imgTwo={slideTwo}
          titulo={"Cobra con TODAS las tarjetas."}
          tituloTwo={"Ahorrá tiempo"}
          parrafoTwo={
            "Relajate que nosotros nos encargamos del resto,visita nuestra sección 'Servicios'."
          }
          parrafo={"Más de 100 medios de pago habilitados, cobrar nunca fue tan facíl."}
        />
        <ProductContContainer />
          
      </div>
     <Footer/>
    </div>
  );
};

export default Services;
