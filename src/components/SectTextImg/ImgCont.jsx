import React from "react";
import { NavLink } from "react-router-dom";
import "./ImgCont.css";
const ImgCont = ({ cont,Title,SubTitle,Button,Img,ClassCont,Display,linkShop}) => {
  return (
    <div
      className={` ${cont?.clase} ${ClassCont} d-flex align-items-center ImgContMedia `}>
      <img className={cont.display} src={`${cont?.img}`} />
      <div className="d-flex flex-column sectImgText">
        <h2 className="w-75">{cont?.titulo} {Title}</h2>
        <p className="w-75">{cont?.parrafo} {SubTitle}</p>
        <NavLink to={"./services"}>
        <button className="btn">{cont?.boton} {Button}</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ImgCont;
