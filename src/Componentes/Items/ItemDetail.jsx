import React from "react"
import {producto} from "../Utils/productos"




function ItemDetail ()  {

    return (
        <>
        
        <div key={producto.id}>

        <img src={producto.imagen} alt="Cadillac Rojo" />
        <h2>{producto.nombre}</h2>
            
        </div>
        
        </>

    )
}
export default ItemDetail;