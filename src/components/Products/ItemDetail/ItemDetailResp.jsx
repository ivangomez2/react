import React, { useContext } from "react";
import { Accordion, Button, Card, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalStateContext";
import ItemCount from "../items/ItemCount";

const ItemDetailResp = ({ productos }) => {
  const { quantityToAdd } = useContext(GlobalContext);
  return (
    <Card>
      <Card.Header>#00{productos.id}</Card.Header>
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>
          {productos.nombre}
        </Card.Title>
        <Card.Text>{productos.descripcion}</Card.Text>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Características</Accordion.Header>
            <Accordion.Body>
              <p>{productos.descripcion1}</p>
              <p>{productos.descripcion2}</p>
              <p>{productos.descripcion3}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Comprar</Accordion.Header>
            <Accordion.Body>
              <h3 style={{ color: "#0697bb" }}>
                Precio total: €{productos.precio}{" "}
              </h3>
              <p>Stock Total: {productos.Stock}</p>
              <ItemCount
                itemCarro={productos}
                handleClick={quantityToAdd}
                Stock={productos.Stock}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <NavLink to={"/Services/MarketShop"}>
          <Button variant="info mt-3">Volver a tienda 🛒</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default ItemDetailResp;
