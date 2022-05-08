import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "../components/Nav-Footer/Layout/Layout"
import Home from "../routes/views/Home"
import Prueba from "../routes/views/Prueba"


const Rutas = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
   <Route index element={<Home/>} />
   <Route path="/Prueba/:id" element={<Prueba/>}/>
   </Route>
   
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default Rutas