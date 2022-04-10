import React,{useEffect,useState} from "react";
import customFetch from "../Utils/customFetch";
import {producto} from "../Utils/productos"
import ItemDetail from "./ItemDetail";




function ItemDetailContainer() {

    const [productito,setProductito] = useState([])

    useEffect ( () => {

        customFetch(2000,producto)
            .then(resultado => setProductito(resultado))
            .catch(error => console.log(error));
    
    
    }, [])
    

    return (
        <>
            <ItemDetail producto={productito}/>
            
        </>
    )
}
export default ItemDetailContainer;