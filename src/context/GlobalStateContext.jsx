import React, { createContext, useState } from 'react'
//nombre de mi context
export const GlobalContext = createContext("")
const GlobalStateContext = ({children}) => {
    //responsable de proveer info y almacenarla
    const [prods, setProds] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [cantidadComprada, setCantidadComprada] = useState(0);
    const quantityToAdd = (cantidad) => {
      setCantidadComprada(cantidad);
      
    };
  return (
    <GlobalContext.Provider value={{prods,setProds,cantidad,setCantidad,quantityToAdd,setCantidadComprada,cantidadComprada}}>
    {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext