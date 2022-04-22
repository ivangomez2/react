import React from 'react'
import "./SectionImg.css"
const SectionImg = ({title,p,button,btnClass,pClass,img1,img2,ClassImgSect,imgSectImg}) => {
  return (

    <div className={`${ClassImgSect} d-flex mt-5 justify-content-around mb-5 align-items-center`}>
      
        <div  className="imgSecthead">
      <img  src={img1} />
 <div className={imgSectImg}>
    <h2>{title}</h2>
    <p className={pClass}>
      {p}
    </p>
    <button style={{backgroundColor:"#212529"}} className={btnClass}>
      {button}
    </button>
  </div>
  </div>
  <div>
      <img className='shadow-lg p-3 mb-5 bg-white rounded' src={img2} />
  </div>
  </div>
  )
}

export default SectionImg