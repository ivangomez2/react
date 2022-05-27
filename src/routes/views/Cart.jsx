import React, { useContext, useEffect, useState } from 'react'
import {Link, useHistory} from "react-router-dom"
import BuyForm from '../../components/Forms/BuyerForm/BuyForm'
import { cartContextCont } from '../../context/CartContext'
import { GlobalContext } from '../../context/GlobalStateContext'


const Cart = () => {

    const {carrito,deleteAll,deleteOne,precio,setPrecio}= useContext(cartContextCont)
    const { cantidad } = useContext(GlobalContext);

 //Map para recorrer cada precio
   const sumar = carrito.map((num,index)=>{return num.Precio})
// reduce para sumar cada precio del cart
   let total = sumar.reduce((a, b) => Number(a) + Number(b), 0);

   useEffect(() => {
     
    setPrecio(total)
   }, [])
    
    return (
    <div className='mt-4 w-100 p-4'>
      <div className='card'>
      {carrito.length > 0 ? carrito.map((prod, index) => {
        return ( <div> 
        <img className='card-img-top' src={prod.img}/>
        <div className='card-body'>
        <h1>{prod.Nombre}</h1>
        <h1> Costo total: {prod.Precio}</h1>
        <h1>Cantidad agregada {cantidad}</h1>
        <button className='btn btn-info text-light' onClick={()=>deleteOne(prod.id)}>Borra este</button>
        </div>
        </div>)
     }) :<div className='mt-3' >
          <span className="sr-only">Aquí no hay productos...</span>
        </div>}
        <button className='btn btn-danger text-light' onClick={deleteAll}> delete all</button>
        </div>
        <p>Precio total = {precio}</p> 
      <Link to={"/Services/MarketShop"}>
        <button className='btn btn-info text-light'>Seguir comprando</button>
        </Link>
        <BuyForm/>
    </div>
  )
}

export default Cart