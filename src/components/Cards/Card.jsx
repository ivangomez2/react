import React from 'react'

const Card = ({CardTitle,CardTitleClass,CardText,CardTextClass,ButtonCardText,ButtonCardTextClass,ImgLink}) => {
  return ( 
    <div>
<div className="card" style={{width:"18em"}}>
<img class="card-img-top" src={ImgLink} alt="Card image cap"/>
  <div className="card-body">
    <h5 className={`card-title ${CardTitleClass}`}>{CardTitle}</h5>
    <p className={`card-text ${CardTextClass}`}>{CardText}</p>
    <a href="#" className={`card-text ${ButtonCardTextClass}`}>{ButtonCardText}</a>
  </div>
</div>
    </div>
  )
}

export default Card