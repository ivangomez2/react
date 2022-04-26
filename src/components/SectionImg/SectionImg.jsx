import React from 'react'
import "./SectionImg.css"
const SectionImg = ({title,p,button,btnClass,pClass,img1,img2,ClassImgSect,imgSectImg}) => {
  return (

    <div className={`${ClassImgSect} sectionImgClass `}>
      
        <div  className={`imgSecthead`}>
      
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
  </div>
      <img className='shadow-lg p-3 mb-5 bg-white rounded' src={img1} />
  </div>
  )
}

export default SectionImg