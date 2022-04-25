import React,{useState} from 'react'
import "./Card.css"
const Card = ({imagen,
    titulo,
    parrafo,
    boton,
    botonText,Stock}) => {

    
    let [numero, setNumero] = useState(0)
    
    let stockActual = Stock - numero
    console.log(stockActual)

  return (
    <div className="card cardStyle bg-dark" style={{width:"18rem"}}>
    <img src={imagen} className="card-img-top" alt="..."/>
    <div className="card-body text-white">
      <h5 className="card-title"> {titulo}</h5>
      <p  className="card-text">{parrafo}</p>
      <p>Stock actual: {stockActual}</p>
    
     <button onClick={()=> numero < Stock ? setNumero(numero + 1) : alert("No hay mas STOCK")} type="button" className={boton}>{botonText}
     
  <span className="m-2 badge rounded-pill bg-danger">
  Total: {numero}
   
  </span>
</button>
    </div>
  </div>
  )
}
    
export default Card
