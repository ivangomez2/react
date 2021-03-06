import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalStateContext";
import Sidebar from "../../Nav-Footer/Sidebar/Sidebar";
import ItemCount from "../items/ItemCount";
import "./ItemDetail.css";
import { Accordion, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import NavBar from "../../Nav-Footer/NavBar/NavBar";
import ItemDetailResp from "./ItemDetailResp";

const ItemDetail = ({ productos, productosFilt }) => {
  // usada para agregar mis productos al carr
  const { quantityToAdd } = useContext(GlobalContext);

  return (
    <>
      <div className="sidebarShow">
        <Sidebar />
      </div>
      <div className="navBarShow">
        <NavBar />
      </div>
      <div className="itemDetail__content  content ">
        {productos.id > 0 ? (
          <div className="itemDetail__Content d-flex">
            <div className="itemDetail__imgCont">
              <img className="itemDetail__img" src={productos.img} alt="" />
              <div className="itemDetail__miniImgCont">
                <h4 style={{ color: "gray" }}>Similares</h4>
                {productosFilt.map((item,index) => {
                  return (
                    <Link to={`/Item/${item.id}`}>
                      <img key={index} className="itemDetail__miniImg" src={item.img} />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="detailCheck">
              <p style={{ color: "gray" }}> Nuevo | Vendidos: 3211 </p>
              <h3>{productos.nombre}</h3>
              <p style={{ fontWeight: "bold", color: "#0697bb" }}>
                ID del producto: #00{productos.id}
              </p>
              <p style={{ color: "gray" }}>Stock máximo: {productos.Stock}</p>
              <Rating fillColor={"#0697bb"} initialValue={"4.5"} />
              <p className="itemDetail__price">€{productos.precio}</p>
              <div className="itemDetail__count">
                <p style={{ color: "gray" }}>Cantidad</p>
                <ItemCount
                  itemCarro={productos}
                  handleClick={quantityToAdd}
                  Stock={productos.Stock}
                />
              </div>

              <h3>Detalles del producto</h3>
              <Accordion
                className="itemDetail__accordion"
                defaultActiveKey="0"
                flush
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Información del producto</Accordion.Header>
                  <Accordion.Body className="itemDetail__list">
                    <p>{productos.descripcion}</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Detalles</Accordion.Header>
                  <Accordion.Body>
                    <ul className="itemDetail__list">
                      <li>{productos.descripcion1}</li>
                      <li>{productos.descripcion2}</li>
                      <li>{productos.descripcion3}</li>
                      <li>{productos.descripcion4}</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            </div>
         
        ) : (
          <Spinner className="spinner" animation="border" variant="info" />
        )}
        <div className="itemDetail__Mobile">
        <ItemDetailResp productos={productos}/>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
