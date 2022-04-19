import React from 'react'
import './Form.css'
const Form = ({formclass,text1,text2,text3,btnclass,btnText,checkboxP}) => {
   
  return (
   
    <form className={`${formclass} shadow-lg p-4 mb-5 bg-white rounded`}  action="">
          <label>{text1}</label>
          <input placeholder="Ingresá tu marca..." type="text" />
          <label>{text2}</label>
          <input placeholder="Ingresá tu email..." type="email" />
          <label>{text3}</label>
          <input placeholder="Ingresá tu contraseña..." type="password" />
          
  

          
          <div className='checkDiv'>
            <input type="checkbox" />    
            <p>{checkboxP}</p>
            </div>
          <button type="button" className={btnclass}>{btnText}</button>
         
        
        
    </form>
  
  )
}

export default Form