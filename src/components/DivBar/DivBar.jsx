import React from "react";

const DivBar = ({Title1, p1, Title2, p2, Title3, p3}) => {
  return (
    <div className="d-flex justify-content-around mt-5 text-light bg-dark p-2 text-center">
      <div>
        <h3>{Title1}</h3>
        <p>{p1}</p>
      </div>
      <div>
        <h3>{Title2}</h3>
        <p>{p2}</p>
      </div>
      <div>
        <h3>{Title3}</h3>
        <p>{p3}</p>
      </div>
    </div>
  );
};

export default DivBar;
