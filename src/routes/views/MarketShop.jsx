import React from 'react'
import Sidebar from '../../components/Nav-Footer/Sidebar/Sidebar'
import ItemDetailContainer from '../../components/Products/ItemDetail/ItemDetailContainer'
import ItemListContainer from '../../components/Products/items/ItemListContainer'
const MarketShop = () => {
  return (
    <div>
   
   <Sidebar/>
<div class="content">
<h1 className='mt-5 text-center display-3'>Tiendas Virtuales</h1>
<p 
 className='mt-5 text-center'>Escoge una membresía que se adecue a tus necesidades,hay para todo tipo de negocio, no olvides visitar nuestra sección de servicios.</p>
 <ItemListContainer/>
</div>
    </div>
  )
}

export default MarketShop