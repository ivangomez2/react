import React, { useState } from 'react'

const BuyForm = () => {
    const [formulario,setFormulario] = useState({
        buyer:{
            email:"",
            nombre:"",
            apellido:"",
            telefono:"",
        }
    
    })



const handleClick = (event) =>{
    setFormulario(event.target.value)
   
}

const handleLog = (click) =>{
    console.log(formulario)
    click.preventDefault();
}




  return (
    <div>
        <form onSubmit={handleLog} action="submit">
            <h4>Validar Compra</h4>
            <p>Recibirás al mail los detalles de tu compra</p>
            
            <label htmlFor="email">Email</label>
            <input value={formulario} name='email' id='email' onChange={(handleClick)} type="text" />    
            
            <label htmlFor="nombre">Nombre</label>
            <input name='nombre' id='nombre' onChange={(handleClick)} type="text" />
           
            <label htmlFor="apellido">Apellido</label>
            <input name='apellido' id='apellido' onChange={(handleClick)} type="text" /> 

            <label htmlFor="telefono">Telefono</label>
            <input id='telefono' onChange={(handleClick)} type="text" />

         <button formAction='submit'> x </button>
        </form>
    </div>
  )
}

export default BuyForm