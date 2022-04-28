import React from 'react'

const Promesa = ({ prods, cargando }) => {
    return (
      <>
        {prods.length > 0 ? (
          prods.map((producto, index) => {
            <>
              <h1 key={index}>{producto.Nombre}</h1>
              <h1 key={index}>{producto.Descripcion}</h1>
              <h1 key={index}>{producto.Boton}</h1>
            </>;
          })
        ) : (
          <h1>{cargando}</h1>
        )}
      </>
    );
        }
  
export default Promesa