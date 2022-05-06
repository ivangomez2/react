import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "../components/Layou/Layout"
import Home from "../views/Home"
import Prueba from "../views/Prueba"


const Rutas = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
   <Route index element={<Home/>} />
   <Route path="/Prueba" element={<Prueba/>}/>
   </Route>
   
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default Rutas