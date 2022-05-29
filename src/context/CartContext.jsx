import React, { createContext, useContext, useState } from 'react'
import { GlobalContext } from './GlobalStateContext';

export const cartContextCont = createContext("")
const CartContext = ({children}) => {
  const [carrito,setCarrito] = useState([])
  const { setCantidad,setCantidadComprada,cantidad} = useContext(GlobalContext);
  const [precio,setPrecio] = useState(0)
  
  const agregarAlCarro = (producto) =>{
   cantidad > 0 ? (setCarrito([...carrito,producto])) : (alert("Debes agregar un producto"))
  }

  const deleteOne = (id)=>{
    const filterData = carrito.filter(item => item.id !== id)
    setCarrito(filterData)
  }
  
  const isInCart = (id) =>{

   return carrito.some(item => item.id === id)
  }

  

  
  const deleteAll = (carrito,cantidad) =>{
    setCarrito([])
    setCantidadComprada(0)
    setCantidad(0)
    }

  return (
    <cartContextCont.Provider value={{carrito,agregarAlCarro,deleteAll,deleteOne,isInCart,setPrecio,precio}}>{children}</cartContextCont.Provider>
  )
}

export default CartContext