import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { cartContextCont } from '../../../context/CartContext';

const BuyForm = () => {
    const {carrito}= useContext(cartContextCont)
    
    const [orden,setOrden] = useState()
    const [formulario,setFormulario] = useState({
        buyer:{
            email:"",
            nombre:"",
            apellido:"",
            telefono:"",
        },
      items:carrito})




const handleChange = (event) =>{
    const { name , value } = event.target;
    setFormulario({
        ...formulario,
        buyer: {
            ...formulario.buyer,
            [name] : value
        },
        items:carrito
    })
    let ticket = orden;
    setOrden(ticket)
   
}

const handleSub = (e) =>{
    e.preventDefault();
 const order = {buyer:   {email:"",nombre:"",apellido:"", telefono:""} ,items:carrito}
 const db = getFirestore();
 const orderColl = collection(db,"order")
 addDoc(orderColl,order).then(({id})=> setOrden(id)).catch(console.log("err"))
  alert(`tu numero de compra es ${orden}`)
}



  return (
    <div>
        <form onSubmit={handleSub}>
            <h4>Validar Compra</h4>
            <p>Recibirás al mail los detalles de tu compra</p>
            
            <label htmlFor="email">Email</label>
            <input name='email' id='email' onChange={(handleChange)} type="text" />    
            
            <label htmlFor="nombre">Nombre</label>
            <input name='nombre' id='nombre' onChange={(handleChange)} type="text" />
           
            <label htmlFor="apellido">Apellido</label>
            <input name='apellido' id='apellido' onChange={(handleChange)} type="text" /> 

            <label htmlFor="telefono">Telefono</label>
            <input id='telefono' onChange={(handleChange)} type="text" />

            <button type='submit' formAction='submit'> enviar </button>
        </form>
    </div>
  )
}

export default BuyForm