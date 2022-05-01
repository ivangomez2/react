import React from 'react'
import './TextTitles.css';
const TextTitles = ({img,titulo,h1,h4,claseCont}) => {
  return (
    <div className={`${claseCont}`}>
    
    <h5 style={{color:"gray"}}>{titulo}</h5>
    <h1 className="display-3">{h1}</h1>
    <h4>
     {h4}
    </h4>
  </div>
  )
}

export default TextTitles