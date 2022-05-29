import React from "react";
import "./divBar.css"
const DivBar = ({Title1, p1, Title2, p2, Title3, p3,TitleClass,PClass,p1Mobile,p2Mobile,p3Mobile ,MobileClass}) => {
  return (
    <div className="d-flex text-light p-3  barCont text-center align-items-center">
      <div>
        <h3 className={TitleClass}>{Title1}</h3>
        <p className={`${PClass}`}>{p1}</p>
        <p className={MobileClass}>{p1Mobile}</p>
      </div>
      <div>
        <h3 className={TitleClass} >{Title2}</h3>
        <p  className={`${PClass}`}>{p2}</p>
        <p className={MobileClass}>{p2Mobile}</p>
      </div>
      <div>
        <h3 className={TitleClass} >{Title3}</h3>
        <p className={`${PClass}`}>{p3}</p>
        <p className={MobileClass}>{p3Mobile}</p>
      </div>
    </div>
  );
};

export default DivBar;
