import React from "react"
import {productos} from "../Utils/productos"


import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ItemCount from '../ItemCount';

function ItemDetail ()  {

    return (
        <>
        <h1>HOLAAAAA</h1>
        <Col >
            <Card>
                <Card.Img variant="top" src={productos.imagen} />
                <Card.Body>
                        <Card.Title>{productos.nombre}</Card.Title>

                    <Card.Text>
                         <h3>{productos.precio}</h3>
                        <ButtonGroup className="mb-2">
                            <ItemCount inicial={1} stock={productos.stock} />
                        </ButtonGroup> 
                         <h5> #{productos.estilo} </h5>
                        <p> Stock Disponible: {productos.stock}</p>
                    </Card.Text>

                </Card.Body>
            </Card>
         </Col>
        
        </>

    )
}
export default ItemDetail;