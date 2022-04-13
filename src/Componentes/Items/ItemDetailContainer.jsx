import React,{useEffect,useState} from "react";
import customFetch from "../Utils/customFetch";
import {productos} from "../Utils/productos"
import ItemDetail from "./ItemDetail";

import {useParams} from "react-router-dom"




function ItemDetailContainer() {

    const [productito,setProductito] = useState([])
    const {id}= useParams();

    useEffect ( () => {
            customFetch(2000,productos)
                .then(resultado => setProductito(resultado.find (productito => productito.id=== Number(id))))
                .catch(error => console.log(error));

    },[id])
    

    return (
        <>
            <ItemDetail producto={productito}/>          
        </>
    )
}
export default ItemDetailContainer;