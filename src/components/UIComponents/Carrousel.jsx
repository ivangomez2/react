import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./UIComp.css"

const Carrousel = ({titulo,parrafo,imgTwo,parrafoTwo,tituloTwo}) => {
  
  return (
<Carousel className='carrousel__cont'>
  <Carousel.Item interval={9000}>
    <img
      className="d-block w-100 carrousel__img"
      src ={imgTwo}
      alt="First slide"
   
    />
   
  </Carousel.Item>
  <Carousel.Item  interval={9000}>
    <img
      className="d-block w-100 carrousel__img "
      src={imgTwo}
      alt="Second slide"
    />
    
  </Carousel.Item>
</Carousel>
  )
}

export default Carrousel