import React from 'react'

const Form = ({formClass,text1,text2,text3,textArea,btnClass,btnText}) => {
    let text = textArea && textArea
  return (
    <form className={formClass} action="">
        <label htmlFor="">{text1}</label>
        <input type="text" name="" id="" />
        <label htmlFor="">{text2}</label>
        <input type="text" name="" id="" />
        <label htmlFor="">{text3}</label>
        <input type="text" />
        <button className={btnClass}>{btnText}</button>
    </form>
  )
}

export default Form