import React, { useContext } from 'react'
import {useHistory} from "react-router-dom"
import { cartContextCont } from '../../context/CartContext'
import { GlobalContext } from '../../context/GlobalStateContext'

const Cart = () => {

    const {carrito,deleteAll}= useContext(cartContextCont)
    const { cantidad } = useContext(GlobalContext);
    console.log(carrito)

  return (
    
    <div className='mt-4 p-4'>
      
      {carrito.length > 0 ? carrito.map((prod, index) => {
        return ( <div>
        
          <h1>{prod.Nombre}</h1>
        <h1>{prod.img}</h1>
        <h1>{prod.Precio}</h1>
        <h1>{prod.id}</h1>
        <h1>Cantidad agregada {prod.cantidad}</h1>
        </div>)
     }) :<div >
          <span className="sr-only">Aquí no hay productos...</span>
        </div>}
        <button onClick={deleteAll}> delete all</button>
    </div>
  )
}

export default Cart