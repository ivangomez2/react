import React from 'react'
import "./TableItems.css"
const TableItems = ({prods}) => {
 console.log(prods)
    return (
    <div>

<table className='Table'>
<tr className='TableTitle'>
          <th>Imagen</th>
          <th>Producto</th>
          <th>Adquiridos</th>
          <th>STOCK</th>
          <th>Descripción</th>
        </tr>
        <tr>
            <td><img src="" alt="" /></td>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
          <td>Male</td>
        </tr>
        <tr>
        <td><img src="" alt="" /></td>
        <td>Male</td>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr>
        <td><img src="" alt="" /></td>
        <td>Male</td>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
</table>
</div>
 
  )
}

export default TableItems