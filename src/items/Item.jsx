import React, { useEffect, useState} from 'react';
import Promesa from "./ItemList"

const Item = () => {
    const productos = [{Nombre:"Subscripción Premium",Descripcion:"Paquete premium ideal para grandes empresas.",Stock:3, boton:"Suscribirse"},
{Nombre:"Subscripción Platino",Descripcion:"Paquete Platino ideal para grandes/medianas empresas.",Stock:5, boton:"Suscribirse"},
{Nombre:"Subscripción Bronce",Descripcion:"Paquete Bronce ideal para quienes recién estan comenzando.",Stock:2, boton:"Suscribirse"}]
const [prods,setProds] = useState([])
useEffect(() => {

    const cards = new Promise((resolve,reject)=>{
    resolve(productos)
    })
    cards.then((res)=>{
        setProds(res).then(()=>{console.log(prods)})
    }).catch((err)=>{
        console.log(err)
    })
    console.log(prods)
}, [])




  return (
    <>
     <Promesa prods={prods}/>
    
    </>
  )
}

export default Item