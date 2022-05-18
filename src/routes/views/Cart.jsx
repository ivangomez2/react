import React, { useContext } from 'react'
import {useHistory} from "react-router-dom"
import { cartContextCont } from '../../context/CartContext'
import { GlobalContext } from '../../context/GlobalStateContext'

const Cart = () => {

    const {carrito,deleteAll,deleteOne}= useContext(cartContextCont)
    const { cantidad } = useContext(GlobalContext);
    console.log(carrito)

  return (
    
    <div className='mt-4 w-100 p-4'>
      
      {carrito.length > 0 ? carrito.map((prod, index) => {
        return ( <div>
        
          <h1>{prod.Nombre}</h1>
        <img src={prod.img}/>
        <h1> Costo total: {prod.Precio}</h1>
        <h1>Cantidad agregada {prod.cantidad}</h1>
        <button onClick={()=>deleteOne(prod.id)}>Borra este</button>
        </div>)
     }) :<div >
          <span className="sr-only">Aquí no hay productos...</span>
        </div>}
        <button onClick={deleteAll}> delete all</button>

    </div>
  )
}

export default Cart