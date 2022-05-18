import React, { createContext, useContext, useEffect, useState } from 'react'
import { GlobalContext } from './GlobalStateContext';

export const cartContextCont = createContext("")
const CartContext = ({children}) => {
  const [carrito,setCarrito] = useState([])
  const { setCantidad,setCantidadComprada } = useContext(GlobalContext);

  const agregarAlCarro = (producto) =>{
    setCarrito([...carrito,producto])
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
    <cartContextCont.Provider value={{carrito,agregarAlCarro,deleteAll,deleteOne,isInCart}}>{children}</cartContextCont.Provider>
  )
}

export default CartContext