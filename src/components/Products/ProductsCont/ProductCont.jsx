import React from 'react'
import ProdItemCont from './ProdItemCont'

import "./ProdItemCont.css"
const ProductCont = ({params}) => {
  
  
    return (
        <div className='productContContainer__cont'>
       {params.length > 0 ? params.map((prod,index) => <ProdItemCont prod={prod} key={index} /> ) :<div className="spinner-grow text-info d-flex text-center" role="status">
        <span className="sr-only">Loading...</span>
      </div>}
      </div>

  )
}

export default ProductCont