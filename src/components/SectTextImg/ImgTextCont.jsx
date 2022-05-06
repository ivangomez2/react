import React, { useState, useEffect } from 'react'
import ImgText from './ImgText'

const ImgTextCont = () => {
  const [cont,AddCont] = useState([])
  
  const contenido = [{
    id:1,
    img: "https://i.ibb.co/m0fnsNx/mxp.png",
    titulo: "Elegí el diseño que se adapte a tus necesidades",
    parrafo: "Más de 100 diseños unicos para generar un producto exclusivo,personalizamos tu marca en minutos.",
    boton: "Información",
    clase: "ItemPrimImg"
  },{id:2,
    img: "https://i.ibb.co/bJpFY4Z/Mi-proyecto-3.png" ,
    titulo: "Cobrar nunca fue tan fácil,no pierdas clientes",
    parrafo: "Soporte para mas de +60 medios de pago incluidos MercadoPago - Tarjetas de credito/debito - BTC.",
    boton: "Información",
    clase: "ItemsegImg"}]
  
    useEffect(() => {
      
      const promesa = new Promise ((resolve,reject) => {
        resolve(contenido)
       }).then((res)=>AddCont(res) )
       .catch((err)=>console.log(err))
     
       console.log(promesa)
      
    
    }, [])
    
 
  return (
    <div>
      <ImgText cont={cont}/>
    </div>
  )
}

export default ImgTextCont