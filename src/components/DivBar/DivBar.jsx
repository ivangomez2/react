import React from "react";
import "./divBar.css"
const DivBar = ({Title1, p1, p1Mobile, Title2, p2,p2Mobile, Title3, p3,p3Mobile,TitleClass,PClass}) => {
  return (
    <div className="d-flex justify-content-around mt-5 text-light p-3 barCont text-center">
      <div>
        <h3 className={TitleClass}>{Title1}</h3>
        <p>{p1}</p>
      </div>
      <div>
        <h3 className={TitleClass} >{Title2}</h3>
        <p className={`${PClass} PClassMov d-none`}>{p2Mobile}</p>
        <p  className={`${PClass} PClass`}>{p2}</p>
      </div>
      <div>
        <h3 className={TitleClass} >{Title3}</h3>
        <p className={ `PClassMov d-none`}>{p3Mobile}</p>
        <p className={`${PClass} PClass`}>{p3}</p>
      </div>
    </div>
  );
};

export default DivBar;
