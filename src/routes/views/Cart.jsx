import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import {Link} from "react-router-dom"
import BuyForm from '../../components/Forms/BuyerForm/BuyForm'
import { cartContextCont } from '../../context/CartContext'
import "../../index.css"


const Cart = () => {

const {carrito,deleteAll,deleteOne,precio}= useContext(cartContextCont)
  

 /*/Map para recorrer cada precio
   const sumar = carrito.map((num,index)=>{return num.Precio})
// reduce para sumar cada precio del cart
   let total = sumar.reduce((a, b) => Number(a) + Number(b), 0);
/*/
    
    return (
    <div className='mt-4 w-100 p-4'>
      <div className='card'>

{/*Se encarga de mostrar la tabla solo si hay productos*/} 
 {carrito.length > 0 && 
  <Table className='cart__table' striped bordered hover variant="info">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Borrar</th>
    </tr>
  </thead>
 
  <tbody className='cart__InfoBody'>    
    {/* Se encarga de mapear cada producto con sus props dentro de la tabla*/}
      {carrito.length > 0 && carrito.map((prod)=>{
      return <tr>
      <td className='Cart__Img'><img  src={prod.img}/></td>
      <td>{prod.nombre}</td>
      <td>{prod.cantidad}</td>
      <td>{prod.precio}</td>
      <td onClick={()=>deleteOne(prod.id)}>❌</td>
      </tr>})}
  </tbody>
</Table>} 
</div>

     {/*Si el carrito está vacio */}     
     {carrito.length <= 0 ? <div className='mt-3' >
     <h5 className="sr-only">Aquí no hay productos...</h5>
     <Link to={"/Services/MarketShop"}>
      <button className='btn btn-info text-light'>Tienda 🛒</button>
     </Link></div> 
     :
     <div>
     <button className='btn btn-danger text-light' onClick={deleteAll}> Eliminar Todo</button>
     <Link to={"/Services/MarketShop"}>
     <button className='btn btn-info text-light'>Seguir comprando</button>
     </Link>
     <BuyForm/>
     </div>
         }
  
        
    </div>
  )
}

export default Cart
