import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { cartContextCont } from '../../../context/CartContext';
import "./BuyForm.css"


const BuyForm = () => {
   const {carrito,costoTotal}= useContext(cartContextCont)
   const [ordering,setOrder] = useState("")
   const [formData , setFormData] = useState ({
       buyer:{email:"",nombre:"",apellido:"",telefono:""}, items:carrito,total:costoTotal()
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
      //reseteamos los valores del form al darle submit
      let formulario = e.target
      formulario.reset();
      e.preventDefault();
    }
    
    

  return (
    <div className='buyForm__container'>
        <form className='buyForm__Formcontainer' onSubmit={sendOrder}>
          <div className='buyForm__titles'>
            <h4>Validar Compra</h4>
            <p>Recibirás al mail los detalles de tu compra</p>
            </div>
            <label htmlFor="email">Email</label>
            <input name='email' id='email' onChange={(handleChange)} type="email"  required />    
            
            <label htmlFor="nombre">Nombre</label>
            <input name='nombre' id='nombre' onChange={(handleChange)} type="text" required />
           
            <label htmlFor="apellido">Apellido</label>
            <input  name='apellido' id='apellido' onChange={(handleChange)} type="text"  required /> 

            <label htmlFor="telefono">Telefono</label>
            <input id='telefono' name='telefono' onChange={(handleChange)} type="number"  required/>

            <button className='btn btn-dark' type='submit' formAction='submit'> Enviar </button>
        </form>
    </div>
  )
}

export default BuyForm