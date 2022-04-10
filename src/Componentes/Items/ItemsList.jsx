import React from "react"
import Items from "./Items";


function ItemsList ({productos})  {
    return (
        productos.map( p => (
            <Items
            key={p.id}
            nombre={p.nombre}
            imagen={p.imagen}
            precio={p.precio}
            stock={p.stock}
            />
        ))
    )
}
export default ItemsList;