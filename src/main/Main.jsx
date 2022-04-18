import React, { Children } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const main = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default main;
