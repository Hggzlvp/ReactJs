import React from "react"
import Items from "./Items";


function ItemsList ({productos})  {
    return (
        productos.map( p => (
            <Items
            id={p.id}
            key={p.id}
            nombre={p.nombre}
            imagen={p.imagen}
            precio={p.precio}
            stock={p.stock}
            estilo={p.estilo}
            />
        ))
    )
}
export default ItemsList;