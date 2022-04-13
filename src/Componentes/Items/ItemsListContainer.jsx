import React,{useEffect,useState} from "react";
import customFetch from "../Utils/customFetch";
import {productos} from "../Utils/productos"
import ItemsList from "./ItemsList";
import {useParams} from "react-router-dom"

function ItemsListContainer(){

    const [Item, setItem] = useState([]);
    const {category}= useParams();

    useEffect (() => {

        if (category) {
            customFetch(2000,productos)
                    .then(resultado => setItem(resultado.filter (Item => Item.estilo===category)))
                    .catch(error => console.log(error));
        }else {
            customFetch(2000,productos)
                    .then(resultado => setItem(resultado))
                    .catch(error => console.log(error));
           
        }

    },[category])

    return (

        <div>
            <ItemsList productos={Item}/>
        </div>
    )
}
export default ItemsListContainer; 