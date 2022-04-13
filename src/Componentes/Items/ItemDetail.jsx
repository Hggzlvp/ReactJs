import React from "react"
import {Link} from "react-router-dom";



import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ItemCount from '../ItemCount';
import Button from "react-bootstrap/Button";



function ItemDetail ({producto})  {


    return (
        <>
        <h1>Detalles del {producto.nombre}</h1>
        <Col >
            <Card>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                        {/* <Card.Title>{producto.nombre}</Card.Title> */}

                    <Card.Text>
                         <h3>{producto.precio}</h3>
                        <ButtonGroup className="mb-2">
                            <ItemCount inicial={1} stock={producto.stock} />
                        </ButtonGroup> 
                         <h5> #{producto.estilo} </h5>
                        <p> Stock Disponible: {producto.stock}</p>
                        <Button variant="outline-dark" > <Link to={`/`}> Volver </Link></Button>
                        <Button variant="outline-dark" > <Link to={" "}>Agregar al Carrito </Link></Button>
                    </Card.Text>

                </Card.Body>
            </Card>
         </Col>
        
        </>

    )
}
export default ItemDetail;