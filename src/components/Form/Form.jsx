import React from 'react'
import './Form.css'

const Form = ({formclass,text1,text2,text3,btnclass,btnText,checkboxP,FormTitle,FormTitleClass}) => {
   
  return (
   <div className="bg-form mt-5">
    
    <form className={`${formclass} shadow-lg p-4 mb-5 bg-white rounded `}  action="">
          <h3 className={` d-none ${FormTitleClass}`}>{FormTitle}</h3>
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
          <button style={{backgroundColor:"#39B8D8"}} type="button" className={btnclass}>{btnText}</button>
         
        
        
    </form>
    </div>
  )
}

export default Form