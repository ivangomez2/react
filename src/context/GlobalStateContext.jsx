import React, { createContext, useState } from 'react'
export const GlobalContext = createContext("")

const GlobalStateContext = ({children}) => {
    //ACA TENGO MI CANTIDAD
    const [cantidad, setCantidad] = useState(1);
    const [cantidadComprada, setCantidadComprada] = useState(1);
    
    const quantityToAdd = (cantidad) => {
      setCantidadComprada(cantidad);
      
    };
  
    return (
    <GlobalContext.Provider value={{cantidad,setCantidad,quantityToAdd,setCantidadComprada,cantidadComprada}}>
    {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext