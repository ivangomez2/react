import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { cartContextCont } from '../../../context/CartContext';

const BuyForm = () => {
   const {carrito}= useContext(cartContextCont)
   const [ordering,setOrder] = useState("")
   const [formData , setFormData] = useState ({
       buyer:{email:"",nombre:"",apellido:"",telefono:""}, items:carrito
    })

    const createTkt = (order)=>{
      if(order){
      alert(`tu numero de ticket es ${ordering}`)}
    }
   
    useEffect(() => {
    createTkt(ordering)
    }, [ordering])
    
  

    const handleChange = (e) =>{
     const {name , value} = e.target
     setFormData({...formData,
     buyer: {...formData.buyer, [name] : value}})
     
}
 
    const sendOrder = (e) =>{
      
      const order = {
        buyer:{formData}, 
      }
      const db = getFirestore();
      const orderColl = collection(db,"ordering")
      addDoc(orderColl,order).then(({id}) =>setOrder(id)).catch (err=>{console.log(err)})
      console.log("creado")
      
      e.preventDefault();
    }
    
    

  return (
    <div>
        <form onSubmit={sendOrder}>
            <h4>Validar Compra</h4>
            <p>Recibirás al mail los detalles de tu compra</p>
            
            <label htmlFor="email">Email</label>
            <input name='email' id='email' onChange={(handleChange)} type="email"  required />    
            
            <label htmlFor="nombre">Nombre</label>
            <input name='nombre' id='nombre' onChange={(handleChange)} type="text" required />
           
            <label htmlFor="apellido">Apellido</label>
            <input  name='apellido' id='apellido' onChange={(handleChange)} type="text"  required /> 

            <label htmlFor="telefono">Telefono</label>
            <input id='telefono' name='telefono' onChange={(handleChange)} type="number"  required/>

            <button type='submit' formAction='submit'> enviar </button>
        </form>
    </div>
  )
}

export default BuyForm