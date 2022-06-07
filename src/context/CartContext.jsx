import React, { createContext, useContext, useState } from 'react'
import { GlobalContext } from './GlobalStateContext';
export const cartContextCont = createContext("")

const CartContext = ({children}) => {
  const { setCantidad,setCantidadComprada} = useContext(GlobalContext);
  const [carrito,setCarrito] = useState([])
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

 // costo total
  const costoTotal = () => {
    const precios = carrito.map((item) => { return item.precio * item.cantidad});
    
    let precioFinal = precios.reduce((a, b) => Number(a) + Number(b), 0);
    return precioFinal;
  };
 

  //borrar todo
  const deleteAll = () =>{
    setCarrito([])
    setCantidadComprada(0)
    setCantidad(0)
    }

  return (
    <cartContextCont.Provider value={{carrito,agregarAlCarro,deleteAll,deleteOne,isInCart,setPrecio,precio,costoTotal}}>{children}</cartContextCont.Provider>
  )
}

export default CartContext