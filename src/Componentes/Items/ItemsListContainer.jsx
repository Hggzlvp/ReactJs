import React,{useEffect,useState} from "react";
import customFetch from "../Utils/customFetch";
import {productos} from "../Utils/productos"
import ItemsList from "./ItemsList";
import {useParams} from "react-router-dom"

function ItemsListContainer(){

    const [Item, setItem] = useState([]);
    const {category}= useParams();

    useEffect (() => {
        
        customFetch(2000,productos)
            .then(resultado => setItem(resultado))
            .catch(error => console.log(error));

        if (category) {
            setItem (productos.filter(f => f.estilo===category)) 
        }else {
            setItem(productos)
        }

    },[])

    return (

        <div>
            <ItemsList productos={Item}/>
        </div>
    )
}
export default ItemsListContainer; 