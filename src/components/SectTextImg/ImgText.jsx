import React from 'react'
import ImgCont from './ImgCont'
const ImgText = ({cont}) => {


  return (
      <div>
    {cont.length > 0 ? cont.map((conts,index) => <ImgCont cont={conts} key={index}/>) : <p>Cargando....</p>}
    </div>
  )
 
}

export default ImgText