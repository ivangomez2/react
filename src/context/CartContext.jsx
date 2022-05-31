import React, { createContext, useContext, useState } from 'react'
import { GlobalContext } from './GlobalStateContext';

export const cartContextCont = createContext("")
const CartContext = ({children}) => {
  const [carrito,setCarrito] = useState([])
  const { setCantidad,setCantidadComprada,cantidad} = useContext(GlobalContext);
  const [precio,setPrecio] = useState(0)
  
  //FUNCION QUE PERMITE AGREGAR SI CANTIDAD ES > A 0 
  const agregarAlCarro = (producto) =>{
   setCarrito([...carrito,producto])
  }

  //borrar un item
  const deleteOne = (id)=>{
    const filterData = carrito.filter(item => item.id !== id)
    setCarrito(filterData)
   
  }
  
  //comprobar si el item está en el carro
  const isInCart = (id) =>{
   return carrito.some(item => item.id === id)
  }

  //borrar todo
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