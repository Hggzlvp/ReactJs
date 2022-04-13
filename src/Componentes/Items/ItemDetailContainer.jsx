import React,{useEffect,useState} from "react";
import customFetch from "../Utils/customFetch";
import {productos} from "../Utils/productos"
import ItemDetail from "./ItemDetail";

import {useParams} from "react-router-dom"




function ItemDetailContainer() {

    const [productito,setProductito] = useState([])
    const {id}= useParams();

    // useEffect ( () => {

    //     customFetch(2000,producto)
    //         .then(resultado => setProductito(resultado))
    //         .catch(error => console.log(error));
    
    
    // }, [])
    useEffect ( () => {

        if (id) {
            customFetch(2000,productos)
                    .then(resultado => setProductito(resultado.find (productito.id===id)))
                    .catch(error => console.log(error));
        }else {
            customFetch(2000,productos)
                .then(resultado => setProductito(resultado))
                .catch(error => console.log(error));
           
        }

    },[id])
    

    return (
        <>
            <ItemDetail producto={productito}/>
            
        </>
    )
}
export default ItemDetailContainer;