import React from 'react'
import ImgCont from './ImgCont'
const ImgText = ({cont}) => {


  return (
      <div>
    {cont.length > 0 ? cont.map((conts) => <ImgCont cont={conts}/>) : <p>Cargando....</p>}
    </div>
  )
 
}

export default ImgText