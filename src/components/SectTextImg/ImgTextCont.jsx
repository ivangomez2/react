import React, { useState, useEffect } from 'react'
import ImgText from './ImgText'
import { contenido } from '../../config'

const ImgTextCont = () => {
  const [cont,AddCont] = useState([])

    useEffect(() => {
      
      const promesa = new Promise ((resolve,reject) => {
        resolve(contenido)
       }).then((res)=>AddCont(res) )
       .catch((err)=>console.log(err))
     
       console.log(promesa)
      
    
    }, [])
    
 
  return (
    <div>
      <ImgText cont={cont}/>
    </div>
  )
}

export default ImgTextCont