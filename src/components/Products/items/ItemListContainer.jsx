import { useState, useEffect, useContext } from "react";
import {React} from "react";
import "./Item.css"
import { doc, getDocs,collection, getFirestore } from "firebase/firestore";
import { db } from "../../../services/firebase";
import Item from "./Item";


const ItemListContainer = ({productos}) => {
  const [state,setState] = useState([]) 
 
  
  const getData = async () =>{
    const productosDb = collection(db,"productos")
    try {
      const data = await getDocs(productosDb)
     const result = data.docs.map(doc => doc = {id:doc.id, ...doc.data()})
     setState(...state,result)
     console.log(result)
    } catch (error) {
     console.log(error,"Error")  
    }

  }

  useEffect(() => {
    getData()
   
  },[]);

  return (
    <div className="gridCards">
    {state.length > 0 ? state.map((prod,index) => <Item state={prod} key={index}/>) :<div className="spinner-grow text-info d-flex text-center" role="status">
          <span className="sr-only">Loading...</span>
        </div>}
    </div>
  );
};

export default ItemListContainer;
