import React from 'react'
import NavBar from '../../components/Nav-Footer/NavBar/NavBar'
import Sidebar from '../../components/Nav-Footer/Sidebar/Sidebar'
import ItemListContainer from '../../components/Products/items/ItemListContainer'


const MarketShop = () => {
  return (
    
    <div>
   <NavBar>  </NavBar>
   <Sidebar/>
<div class="content">


 <ItemListContainer/>
</div>
    </div>
   
  )
}

export default MarketShop