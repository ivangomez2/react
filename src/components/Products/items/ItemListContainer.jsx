import { useState, useEffect, useContext } from "react";
import {React} from "react";
import "./Item.css"
import { getDocs,collection } from "firebase/firestore";
import { db } from "../../../services/firebase";
import ItemList from "./ItemList";
import Category from "../../../routes/views/Category";


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
    <div>
    <ItemList state={state}/>
    </div>
  );
};

export default ItemListContainer;
