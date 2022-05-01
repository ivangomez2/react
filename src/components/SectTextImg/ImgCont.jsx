import React from "react";
import "./ImgCont.css";
const ImgCont = ({ cont }) => {
  return (
    <div
      className={` ${cont.clase} d-flex align-items-center ImgContMedia mb-5 mt-5 `}
    >
      <img className="" src={cont.img} />
      <div className="d-flex flex-column sectImgText">
        <h2 className="w-75">{cont.titulo}</h2>
        <p className="w-75">{cont.parrafo}</p>
        <button className="btn">{cont.boton}</button>
      </div>
    </div>
  );
};

export default ImgCont;
