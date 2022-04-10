import React,{useEffect,useState} from "react";
import customFetch from "../Utils/customFetch";
import {productos} from "../Utils/productos"
import ItemsList from "./ItemsList";

function ItemsListContainer(){

    const [Item, setItem] = useState([]);

    useEffect (() => {
        
        customFetch(2000,productos)
            .then(resultado => setItem(resultado))
            .catch(error => console.log(error));
    },[])

    return (

        <div>
            <ItemsList productos={Item}/>
        </div>
    )
}
export default ItemsListContainer;