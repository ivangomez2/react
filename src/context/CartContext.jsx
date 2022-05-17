import React, { createContext, useContext, useEffect, useState } from 'react'
import { GlobalContext } from './GlobalStateContext';

export const cartContextCont = createContext("")
const CartContext = ({children}) => {
  const [carrito,setCarrito] = useState([])
  const { setCantidad,setCantidadComprada } = useContext(GlobalContext);

  const agregarAlCarro = (producto) =>{
    setCarrito([...carrito,producto])
  }
  
  const deleteAll = (carrito,cantidad) =>{
    setCarrito([])
    setCantidadComprada(0)
    setCantidad(0)
    }

  return (
    <cartContextCont.Provider value={{carrito,agregarAlCarro,deleteAll}}>{children}</cartContextCont.Provider>
  )
}

export default CartContext