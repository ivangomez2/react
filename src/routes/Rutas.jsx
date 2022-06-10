import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "../components/Nav-Footer/Layout/Layout"
import ItemListContainer from "../components/Products/items/ItemListContainer"
import Home from "../routes/views/Home"
import Category from "../routes/views/Category"
import MarketShop from "./views/MarketShop"
import ItemDetailContainer from "../components/Products/ItemDetail/ItemDetailContainer"
import Services from "./views/Services"
import Cart from "./views/Cart"

const Rutas = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
     
      <Route path="" element={<Layout/>}>
     
   <Route index element={<Home/>} />
  {/* <Route path="/Prueba/:id" element={<Services/>}/>*/}
  <Route path="/" element={<ItemListContainer/>}/>
{/* <Route path="/Prueba/:id" element={<Services/>}/>*/}
  </Route>
  <Route path="/Category/:category" element={<Category/>}/>
  <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
  <Route path="/Cart" element={<Cart/>}/>
  <Route path="/Services/MarketShop" element={<MarketShop/>}/>
  <Route path="/Services/" element={<Services/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default Rutas
