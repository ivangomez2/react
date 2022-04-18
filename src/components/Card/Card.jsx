import React from 'react'

const Card = ({imagen,
    titulo,
    parrafo,
    boton,
    botonText}) => {
  return (
    <div className="card" style={{width:"18rem"}}>
    <img src={imagen} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title"> {titulo}</h5>
      <p className="card-text">{parrafo}</p>
      <a href="#" className={boton}>{botonText}</a>
    </div>
  </div>
  )
}

export default Card