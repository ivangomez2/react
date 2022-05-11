import React from 'react'
import "../../components/Cards/Card.css"
import Sidebar from '../../components/Nav-Footer/Sidebar/Sidebar'
import ProductCont from '../../components/Products/ProductsCont/ProductCont'
import ItemDetailContainer from '../../components/Products/ItemDetail/ItemDetailContainer'
const Services = () => {


  return (
<div>

<Sidebar/>
<div class="content">
  <h1>Servicios</h1>
<ProductCont/>
<ItemDetailContainer/>
    </div>
</div>

  
  )
}

export default Services